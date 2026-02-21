import { z } from 'zod';
import { StatSchema, WorkApproachPillarSchema, CapabilityCategorySchema } from './schemas';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const workHero = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		backgroundImage: z.string(),
		backgroundAlt: z.string(),
		stats: z.array(StatSchema)
	})
	.parse({
		heading: 'Work that drives results',
		subheading:
			'From concept to launch, these projects showcase strategic thinking, technical execution, and measurable business impact across eCommerce, brand development, and digital product design.',
		backgroundImage:
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
		backgroundAlt: 'Mountain landscape',
		stats: [
			{ value: '$50M+', label: 'Revenue Generated' },
			{ value: '100+', label: 'Projects Delivered' },
			{ value: '35%', label: 'Avg. Conversion Lift' },
			{ value: '10+', label: 'Years Experience' }
		]
	});

// ─── Approach ─────────────────────────────────────────────────────────────────

export const workApproach = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		pillars: z.array(WorkApproachPillarSchema)
	})
	.parse({
		eyebrow: 'My Approach',
		heading: 'Strategy meets execution',
		subheading:
			'Every project begins with understanding your business goals, not just your design preferences. I combine strategic thinking with hands-on technical execution to deliver solutions that look great, perform brilliantly, and scale with your business.',
		pillars: [
			{
				icon: 'lightbulb',
				title: 'Migration & System Integration',
				description:
					'Seamless platform migrations and integrations that maximize efficiency and allow you to leverage the latest digital platforms.'
			},
			{
				icon: 'pen',
				title: 'Systems Data, API & ERP',
				description: 'Integration of data systems, APIs, and ERP solutions to streamline operations and enhance data flow.'
			},
			{
				icon: 'code',
				title: 'Development & Implementation',
				description:
					'Hands-on development and implementation of digital commerce solutions, ensuring robust performance and scalability.'
			}
		]
	});

// ─── Projects section headings ────────────────────────────────────────────────

export const workProjectsSection = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string()
	})
	.parse({
		eyebrow: 'Featured Work',
		heading: 'Selected projects',
		subheading:
			'A curated selection of work spanning eCommerce transformation, brand development, and full-stack product design.'
	});

// ─── Capabilities ─────────────────────────────────────────────────────────────

export const workCapabilities = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		categories: z.array(CapabilityCategorySchema)
	})
	.parse({
		eyebrow: 'Core Capabilities',
		heading: 'What I bring to your project',
		subheading: 'Full-stack expertise across strategy, design, and development for digital commerce experiences.',
		categories: [
			{
				title: 'eCommerce Platforms',
				description: 'Platform selection, implementation, and optimization',
				tags: ['Shopify', 'Magento', 'Shopify Headless']
			},
			{
				title: 'Frictionless eCommerce',
				description: 'Improve ROI and CLV through optimised customer journeys',
				tags: ['UX Journey', 'Customer Profiling', 'Klaviyo', 'Re-engagement']
			},
			{
				title: 'ERP & Systems Integrations',
				description: 'API & Middleware integration',
				tags: ['REST', 'Alumio', 'NetSuite Connector', 'Activepieces', 'n8n']
			},
			{
				title: 'Front-End Development',
				description: 'Modern frameworks and performant experiences',
				tags: ['Bun JS', 'SvelteKit', 'Next.js']
			},
			{
				title: 'Digital Strategy',
				description: 'Market research and growth planning',
				tags: ['Analytics', 'CRO', 'SEO']
			}
		]
	});

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const workCta = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse({
		heading: 'Ready to start your project?',
		subheading:
			"Let's discuss how we can create something impactful together. Whether you need strategic guidance, hands-on development, or end-to-end execution.",
		primaryCta: { label: 'Get In Touch', href: '#email' },
		secondaryCta: { label: 'Learn More About Me', href: '/about' }
	});
