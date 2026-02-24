import { z } from 'zod';
import { ServicePillarSchema, ProcessStepSchema, EngagementOptionSchema, TechCategorySchema } from './schemas';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const servicesHero = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		backgroundImage: z.string(),
		backgroundAlt: z.string()
	})
	.parse({
		heading: 'The full stack, owned end-to-end',
		subheading:
			'From platform architecture and ERP integration to automation and advisory — I work across the full digital commerce stack so you have one person who understands how it all connects.',
		backgroundImage:
			'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop',
		backgroundAlt: 'Mountain terrain'
	});

// ─── Core service pillars (overview) ─────────────────────────────────────────

export const servicesPillars = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		pillars: z.array(ServicePillarSchema)
	})
	.parse({
		eyebrow: 'What I Do',
		heading: 'Three pillars of digital commerce',
		subheading:
			'Platform, systems, and strategy — I cover the full stack so nothing falls through the gaps.',
		pillars: [
			{
				icon: 'cart',
				title: 'Platform Architecture & Development',
				description:
					'Adobe Commerce, Magento, and Shopify — built, maintained, and optimised for growing DTC and retail brands.',
				bullets: [
					'Adobe Commerce & Magento builds',
					'Shopify & Shopify Plus (Partner)',
					'Migrations, performance & custom development'
				]
			},
			{
				icon: 'database',
				title: 'Systems Integration & Automation',
				description:
					'APIs, middleware, and automation that connect your entire commerce operation — from ERP to marketing tools.',
				bullets: [
					'ERP integration (NetSuite via Alumio)',
					'API development & third-party connectors',
					'Workflow automation (n8n, Activepieces)'
				]
			},
			{
				icon: 'chart',
				title: 'Consultancy & Advisory',
				description:
					'Strategic guidance for brands that need clarity on their stack, direction on what to build, or fractional technical leadership.',
				bullets: [
					'Tech stack audits & platform selection',
					'Roadmap & prioritisation',
					'Fractional technical lead'
				]
			}
		]
	});

// ─── Detailed service areas ───────────────────────────────────────────────────

const ServiceItemSchema = z.object({
	title: z.string(),
	description: z.string()
});

const ServiceAreaSchema = z.object({
	id: z.string(),
	eyebrow: z.string(),
	heading: z.string(),
	subheading: z.string(),
	items: z.array(ServiceItemSchema)
});

export const servicesDetails = z
	.object({
		platform: ServiceAreaSchema,
		integrations: ServiceAreaSchema,
		consultancy: ServiceAreaSchema
	})
	.parse({
		platform: {
			id: 'platform',
			eyebrow: 'Platform Architecture & Development',
			heading: 'Built properly, from the ground up',
			subheading:
				'Most eCommerce problems are architectural, not cosmetic. Whether you need Adobe Commerce for complex B2B and DTC operations, or Shopify for fast-moving DTC brands, I work across both platforms — hands-on, no handoffs.',
			items: [
				{
					title: 'Adobe Commerce & Magento',
					description:
						'Custom Adobe Commerce and Magento 2 builds for mid-market and enterprise — theme development, custom modules, third-party integrations, and performance work baked in from day one.'
				},
				{
					title: 'Shopify & Shopify Plus',
					description:
						'As a Shopify Partner, I build and optimise Shopify stores for DTC brands — theme customisation, app integrations, checkout extensions, and migrations from legacy platforms.'
				},
				{
					title: 'Platform Migrations',
					description:
						'Moving from Magento 1, WooCommerce, or a custom platform to Adobe Commerce or Shopify — with full data migration, integration continuity, and no surprise downtime.'
				},
				{
					title: 'Custom Module & App Development',
					description:
						'Bespoke Magento modules and Shopify apps that extend platform functionality to match your specific business logic — from custom checkout flows to complex pricing rules and B2B functionality.'
				},
				{
					title: 'Performance Optimisation',
					description:
						'Full-stack performance work: caching configuration, database query optimisation, image pipelines, and Core Web Vitals improvements with measurable impact on conversion.'
				},
				{
					title: 'Ongoing Support & Retainers',
					description:
						'Reliable, experienced platform support on a retainer basis — feature development, security patches, and platform evolution over time without the overhead of a full-time hire.'
				}
			]
		},
		integrations: {
			id: 'integrations',
			eyebrow: 'Systems Integration & Automation',
			heading: 'Systems that actually talk to each other',
			subheading:
				'Most growing businesses are held back not by their storefront but by the glue — or lack of it — connecting everything behind it. I design and build integrations that eliminate manual work, reduce errors, and give your team reliable data.',
			items: [
				{
					title: 'ERP Integration (NetSuite)',
					description:
						'Connect your eCommerce platform to NetSuite via Alumio or custom connectors — syncing orders, inventory, customers, and fulfilment data in both directions, reliably.'
				},
				{
					title: 'Middleware & iPaaS (Alumio)',
					description:
						'Purpose-built integration flows using Alumio that translate, transform, and route data between platforms — with full logging, error handling, and monitoring built in.'
				},
				{
					title: 'Workflow Automation',
					description:
						'Automated processes using n8n and Activepieces that handle repetitive operational tasks — notifications, data syncs, tagging, routing — without ongoing manual effort.'
				},
				{
					title: 'API Development',
					description:
						'Custom REST APIs that bridge gaps between your platforms, expose data to third parties, or power internal dashboards and operational tooling.'
				},
				{
					title: 'Marketing Tech Integration (Klaviyo)',
					description:
						'Deep integration of Klaviyo with your commerce platform — syncing customer data, order events, and behavioural signals to power accurate, timely lifecycle automation.'
				},
				{
					title: 'Custom Applications & Tooling',
					description:
						'Self-hosted applications and internal tools built to solve operational problems that off-the-shelf software doesn\'t cover — from custom admin panels to automated reporting dashboards.'
				}
			]
		},
		consultancy: {
			id: 'consultancy',
			eyebrow: 'Consultancy & Advisory',
			heading: 'Clarity that drives action',
			subheading:
				'Sometimes you don\'t need more hands — you need the right perspective. I work with founders, product teams, and agencies as a trusted advisor to unblock decisions, define priorities, and make sure investment goes in the right direction.',
			items: [
				{
					title: 'Tech Stack Audits',
					description:
						'A thorough review of your platform, integrations, and data flows — identifying what\'s working, what\'s fragile, and what to fix first. Delivered as a prioritised action plan.'
				},
				{
					title: 'Platform Selection',
					description:
						'Impartial advice on whether Adobe Commerce, Magento, Shopify Plus, or a composable approach is the right fit — based on your business model, team, and growth trajectory, not what\'s trending.'
				},
				{
					title: 'Roadmap & Prioritisation',
					description:
						'Cut through backlog noise. I help you identify what to build next and in what order — based on real business impact, not whichever problem is shouting loudest.'
				},
				{
					title: 'Fractional Technical Lead',
					description:
						'Part-time strategic and technical leadership for growing brands that need senior guidance without a full-time hire — available for calls, code reviews, and async support.'
				},
				{
					title: 'Agency & Dev Team Review',
					description:
						'Second-opinion reviews of agency proposals, scoping documents, or existing work — so you know what you\'re actually getting before you commit budget.'
				},
				{
					title: 'Team Coaching',
					description:
						'Structured mentorship and knowledge transfer to help your in-house team get up to speed on Adobe Commerce, Shopify, integration patterns, or eCommerce operations.'
				}
			]
		}
	});

// ─── Technical capabilities ───────────────────────────────────────────────────

export const servicesTech = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		categories: z.array(TechCategorySchema)
	})
	.parse({
		eyebrow: 'Tech Stack',
		heading: 'Tools I work with',
		subheading: 'A snapshot of the platforms, frameworks, and tools I use regularly across client and in-house work.',
		categories: [
			{
				icon: 'shop',
				title: 'eCommerce Platforms',
				tags: ['Adobe Commerce', 'Magento 2', 'Shopify', 'Shopify Plus', 'WooCommerce']
			},
			{
				icon: 'link',
				title: 'Integration & Middleware',
				tags: ['Alumio', 'REST APIs', 'GraphQL', 'Webhooks', 'n8n', 'Activepieces']
			},
			{
				icon: 'database',
				title: 'ERP & Operations',
				tags: ['NetSuite', 'Order management', 'Inventory sync', 'Data pipelines']
			},
			{
				icon: 'people',
				title: 'Marketing Tech',
				tags: ['Klaviyo', 'GA4', 'GTM', 'Looker Studio', 'Meta Ads', 'Google Ads']
			},
			{
				icon: 'code',
				title: 'Development',
				tags: ['PHP', 'TypeScript', 'SvelteKit', 'Next.js', 'Tailwind CSS', 'Hyvä']
			},
			{
				icon: 'chart',
				title: 'Tooling & Infrastructure',
				tags: ['Git', 'Linux / self-hosted', 'Docker', 'Cloudflare', 'Figma', 'MySQL']
			}
		]
	});

// ─── Process ──────────────────────────────────────────────────────────────────

export const servicesProcess = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		steps: z.array(ProcessStepSchema)
	})
	.parse({
		eyebrow: 'Working Together',
		heading: 'What to expect',
		steps: [
			{
				number: '01',
				title: 'Discovery call',
				description:
					'We talk through your situation, goals, and current stack. I ask a lot of questions — the right ones upfront saves everyone time.'
			},
			{
				number: '02',
				title: 'Scoping & proposal',
				description:
					'I map out the work, dependencies, and risks honestly. You get a clear scope of what\'s included, what isn\'t, and why.'
			},
			{
				number: '03',
				title: 'Build & communicate',
				description: 'Regular check-ins, no radio silence. I share progress as it happens and flag anything unexpected early.'
			},
			{
				number: '04',
				title: 'Handover & support',
				description: 'I document what\'s been built and how to maintain it. Ongoing support available for clients who need it.'
			}
		]
	});

// ─── Engagement options ───────────────────────────────────────────────────────

export const servicesEngagement = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		options: z.array(EngagementOptionSchema)
	})
	.parse({
		eyebrow: 'Work With Me',
		heading: 'Flexible engagements',
		subheading: 'No bloated retainers, no unnecessary overhead — I work in a way that fits your stage and budget.',
		options: [
			{
				emoji: '💼',
				title: 'Full-Time',
				description:
					'Join your team as Digital Commerce Systems Lead, Head of eCommerce, or Director of Digital — owning the full stack for long-term strategic impact.',
				callout: 'Strategic leadership'
			},
			{
				emoji: '🚀',
				title: 'Project-Based',
				description:
					'Fixed-scope engagements for platform migrations, integrations, or specific development initiatives — with clear deliverables and a defined timeline.',
				callout: 'Defined deliverables'
			},
			{
				emoji: '💡',
				title: 'Advisory',
				description:
					'Ongoing guidance and fractional technical leadership for brands that need senior expertise without a full-time commitment.',
				callout: 'Flexible support'
			}
		]
	});

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const servicesCta = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse({
		heading: "Let's discuss your project",
		subheading:
			"Tell me where you're at and what's not working. I'll give you an honest view of what's possible and what it would take.",
		primaryCta: { label: 'Get in Touch', href: '#email' },
		secondaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/olivergbagley/' }
	});
