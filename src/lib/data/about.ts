import { z } from 'zod';
import { ApproachStepSchema, SkillCategorySchema, ExperienceRoleSchema } from './schemas';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const aboutHero = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		backgroundImage: z.string(),
		backgroundAlt: z.string()
	})
	.parse({
		heading: 'Commerce from the inside out',
		subheading:
			'Not just the storefront — the whole stack. Platforms, integrations, automation, data pipelines, and the custom tooling that fills the gaps between them.',
		backgroundImage:
			'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop',
		backgroundAlt: 'Mountain Sunset landscape with Hot air balloons'
	});

// ─── Story ────────────────────────────────────────────────────────────────────

export const aboutStory = z
	.object({
		eyebrow: z.string(),
		image: z.object({ src: z.string(), alt: z.string() }),
		paragraphs: z.array(z.string())
	})
	.parse({
		eyebrow: 'My Story',
		image: { src: '/media/images/oliver.jpg', alt: 'Oliver Bagley' },
		paragraphs: [
			"I got into digital commerce through the technical side — drawn in by the puzzle of connecting systems, automating workflows, and figuring out how to make complex platforms work for real businesses. What started as web development quickly evolved into a specialism in eCommerce architecture and systems integration.",
			"Most recently I was Digital Commerce Systems Lead at Frog Bikes, a specialist children's bike manufacturer, where I owned the entire commerce stack end-to-end — from the Adobe Commerce platform and NetSuite ERP integration via Alumio, to Klaviyo lifecycle automation, custom self-hosted applications, and the day-to-day problem-solving that keeps a growing DTC business running.",
			"What I find most satisfying is building things that genuinely hold together — not just things that look good in a demo. I'm the person who gets called when something is broken, complex, or doesn't exist yet. I think across the whole system, from the customer-facing storefront to the data pipelines behind it, and I'm comfortable getting my hands dirty at every layer."
		]
	});

// ─── Experience ───────────────────────────────────────────────────────────────

export const aboutExperience = z
	.object({
		current: ExperienceRoleSchema,
		previous: ExperienceRoleSchema
	})
	.parse({
		current: {
			period: 'Most Recent',
			title: 'Digital Commerce Systems Lead',
			company: 'Frog Bikes',
			bullets: [
				'Built and owned the full DTC commerce stack from platform to ERP',
				'Integrated Adobe Commerce with NetSuite via Alumio middleware',
				'Built custom self-hosted applications and internal tooling',
				'Implemented Klaviyo lifecycle automation and GA4 data infrastructure'
			]
		},
		previous: {
			period: 'Prior',
			title: 'Digital Product Lead',
			company: 'Various Agencies & Clients',
			bullets: [
				'Led digital transformation projects for Ford, DLL Group, and DTC startups',
				'Designed and built custom web applications and brand identities',
				'Managed cross-functional product teams from brief to launch',
				'Delivered £10M+ in supported client revenue across engagements'
			]
		}
	});

// ─── Approach (retained for reference, not rendered on about page) ─────────────

export const aboutApproach = z
	.object({
		heading: z.string(),
		steps: z.array(ApproachStepSchema)
	})
	.parse({
		heading: 'My Approach',
		steps: [
			{
				number: '01',
				title: 'Understand the whole system',
				description:
					"Before touching anything, I map out how the pieces fit together — platforms, data flows, integrations, and business logic. Most problems aren't where they first appear."
			},
			{
				number: '02',
				title: 'Build things that hold together',
				description:
					"I favour solutions that are maintainable and well-integrated over quick fixes that create new problems. Technical debt is expensive — especially in commerce."
			},
			{
				number: '03',
				title: 'Get my hands dirty',
				description:
					"I build things myself. From writing code and configuring platforms to setting up data pipelines and debugging integrations — I don't outsource the hard parts."
			},
			{
				number: '04',
				title: 'Measure and improve',
				description:
					"Once something is live, I use real data to understand what's working. Analytics, operational reporting, and continuous iteration are part of how I work, not an afterthought."
			}
		]
	});

// ─── Skills ───────────────────────────────────────────────────────────────────

export const aboutSkills = z
	.object({
		heading: z.string(),
		categories: z.array(SkillCategorySchema),
		toolsHeading: z.string(),
		tools: z.array(z.string())
	})
	.parse({
		heading: 'What I work with',
		categories: [
			{
				title: 'eCommerce Platforms',
				color: 'terracotta',
				items: [
					'Adobe Commerce',
					'Magento 2',
					'Shopify',
					'Shopify Plus',
					'WooCommerce'
				]
			},
			{
				title: 'Integration & Systems',
				color: 'amber',
				items: [
					'NetSuite',
					'Alumio',
					'REST APIs',
					'GraphQL',
					'n8n',
					'Activepieces'
				]
			},
			{
				title: 'Development',
				color: 'terracotta',
				items: [
					'PHP',
					'TypeScript',
					'SvelteKit',
					'Next.js',
					'Tailwind CSS',
					'Hyvä'
				]
			},
			{
				title: 'Marketing & Data',
				color: 'amber',
				items: [
					'Klaviyo',
					'GA4',
					'GTM',
					'Looker Studio',
					'Meta Ads',
					'Google Ads'
				]
			}
		],
		toolsHeading: 'Day-to-day tools',
		tools: []
	});

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const aboutCta = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse({
		heading: "Let's work together",
		subheading: "I'm currently open to full-time opportunities and select consultancy projects.",
		primaryCta: { label: 'Get in Touch', href: '#email' },
		secondaryCta: { label: 'View Services', href: '/services' }
	});
