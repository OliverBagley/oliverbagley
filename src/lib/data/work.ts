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
		heading: 'Selected work & projects',
		subheading:
			'A cross-section of real work — platform builds, systems integrations, brand development, and digital products. Each project is a problem that needed solving.',
		backgroundImage:
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
		backgroundAlt: 'Mountain landscape',
		stats: [
			{ value: '8+', label: 'Years Experience' },
			{ value: '£10M+', label: 'Revenue Supported' },
			{ value: '3', label: 'Core Platforms' }
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
		eyebrow: 'How I work',
		heading: 'Systems thinking, hands-on execution',
		subheading:
			'Every engagement starts by understanding how everything connects — the business, the data, the platforms, and the gaps between them. Then I build.',
		pillars: [
			{
				icon: 'lightbulb',
				title: 'Map before building',
				description:
					'I start every project by understanding the existing systems, data flows, and constraints. Most problems aren\'t where they first appear.'
			},
			{
				icon: 'code',
				title: 'Build it to last',
				description: 'I write code and build integrations with maintainability in mind. What I ship should still make sense in two years.'
			},
			{
				icon: 'chart',
				title: 'Measure what matters',
				description:
					'Once live, I use real data to understand what\'s working. Decisions should be based on evidence, not assumptions.'
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
			'Real problems, real solutions — spanning eCommerce platform work, systems integration, brand development, and full-stack digital products.'
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
		heading: 'Got a project in mind?',
		subheading:
			"Tell me what you're working on — whether it's a platform build, a complex integration, or an operational problem that needs untangling. I'll tell you honestly if I can help.",
		primaryCta: { label: 'Get In Touch', href: 'mailto:iam@oliverbagley.com' },
		secondaryCta: { label: 'View Services', href: '/services' }
	});
