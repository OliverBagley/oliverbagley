import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const body = await request.json();
		
		// Validate input
		if (!body.name || !body.email || !body.message) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}
		
		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(body.email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}
		
		// In development, just log and return success
		if (import.meta.env.DEV) {
			console.log('📧 Contact form submission (DEV MODE):');
			console.log('From:', body.name, '<' + body.email + '>');
			console.log('Message:', body.message);
			return json({ success: true });
		}
		
		// In production (Cloudflare), use environment variables
		const toEmail = platform?.env?.CONTACT_EMAIL || 'hello@oliverbagley.com';
		const sendGridApiKey = platform?.env?.SENDGRID_API_KEY;
		
		if (!sendGridApiKey) {
			console.error('SENDGRID_API_KEY not configured');
			return json({ error: 'Email service not configured' }, { status: 500 });
		}
		
		// Send email via SendGrid
		const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${sendGridApiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				personalizations: [{
					to: [{ email: toEmail }],
					subject: `New Contact Form Submission from ${body.name}`
				}],
				from: {
					email: 'noreply@oliverbagley.com',
					name: 'Portfolio Contact Form'
				},
				reply_to: {
					email: body.email,
					name: body.name
				},
				content: [{
					type: 'text/html',
					value: `
						<h2>New Contact Form Submission</h2>
						<p><strong>Name:</strong> ${body.name}</p>
						<p><strong>Email:</strong> ${body.email}</p>
						<p><strong>Message:</strong></p>
						<p>${body.message.replace(/\n/g, '<br>')}</p>
					`
				}]
			})
		});
		
		if (!emailResponse.ok) {
			const errorText = await emailResponse.text();
			console.error('SendGrid error:', errorText);
			throw new Error('Failed to send email');
		}
		
		return json({ success: true });
		
	} catch (error) {
		console.error('Contact form error:', error);
		return json({ error: 'Failed to send message' }, { status: 500 });
	}
};
