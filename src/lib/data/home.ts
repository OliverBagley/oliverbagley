import { z } from 'zod';
import { StatSchema, ServicePillarSchema, BulletItemSchema } from './schemas';

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HeroSchema = z.object({
	eyebrow: z.string(),
	heading: z.object({ text: z.string(), highlight: z.string() }),
	tagline: z.string(),
	currentRole: z.object({ name: z.string(), href: z.string() }),
	primaryCta: z.object({ label: z.string(), href: z.string() }),
	secondaryCta: z.object({ label: z.string(), href: z.string() }),
	stats: z.array(StatSchema.extend({ color: z.enum(['terracotta', 'amber']) }))
});

export const homeHero = HeroSchema.parse({
	eyebrow: 'Digital Operations & eCommerce Systems Expert',
	heading: { text: 'Building digital experiences that ', highlight: 'drive growth' },
	tagline:
		'I architect and maintain full digital commerce stacks — from platform builds and ERP integrations to automation, custom tooling, and everything in between. Most recently at',
	currentRole: { name: 'Frog Bikes', href: '' },
	primaryCta: { label: 'View Projects', href: '#work' },
	secondaryCta: { label: 'LinkedIn →', href: 'https://www.linkedin.com/in/olivergbagley/' },
	stats: [
		{ value: '8+', label: 'Years Experience', color: 'terracotta' },
		{ value: '£10M+', label: 'Revenue Supported', color: 'amber' }
	]
});

// ─── Solutions ─────────────────────────────────────────────────────────────────

const SolutionsSchema = z.object({
	eyebrow: z.string(),
	heading: z.string(),
	subheading: z.string(),
	pillars: z.array(ServicePillarSchema),
	unified: z.object({
		heading: z.string(),
		paragraphs: z.array(z.string()),
		features: z.array(BulletItemSchema.extend({ icon: z.string() }))
	})
});

export const homeSolutions = SolutionsSchema.parse({
	eyebrow: 'What I Do',
	heading: 'The full digital commerce stack, owned',
	subheading:
		'I work across the entire commerce engine — from the storefront through to ERP, automation, and custom tooling — so brands have one person who understands how it all fits together.',
	pillars: [
		{
			icon: 'cart',
			title: 'Platform Architecture & Development',
			description:
				'Adobe Commerce, Magento, and modern headless approaches — built, maintained, and evolved for growing DTC and retail brands.',
			bullets: [
				'Platform build, migration & disaster recovery',
				'Theme development & performance optimisation',
				'Conversion rate optimisation'
			]
		},
		{
			icon: 'database',
			title: 'Systems Integration & Automation',
			description:
				'APIs, middleware, and automation that connect your entire commerce operation — from ERP and CRM to marketing tools and custom data pipelines.',
			bullets: ['ERP integration (NetSuite via Alumio)', 'API development & third-party connectors', 'Workflow automation (n8n, Activepieces)']
		},
		{
			icon: 'chart',
			title: 'Marketing Tech & Commerce Operations',
			description:
				'Klaviyo lifecycle automation, analytics, and the operational glue that keeps a DTC business running smoothly at scale.',
			bullets: ['Email & lifecycle automation (Klaviyo)', 'GA4, GTM & Looker Studio reporting', 'Commerce operations & process improvement']
		}
	],
	unified: {
		heading: 'One person, end-to-end',
		paragraphs: [
			"Most commerce problems don't live in one system — they live in the gaps between them. I understand the whole stack: the platform, the integrations, the data flows, and the business context behind them. Whether you're re-platforming, scaling operations, or untangling a messy integration, I can diagnose problems faster and build solutions that actually hold together."
		],
		features: []
	}
});

// ─── Platform logos ────────────────────────────────────────────────────────────

const LogoSchema = z.object({ name: z.string(), src: z.string() });

export const homePlatforms = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		logos: z.array(LogoSchema)
	})
	.parse({
		eyebrow: 'Tech Stack',
		heading: 'Platforms & tools I work with',
		logos: [
			{ name: 'Magento', src: '/media/logos/magento.avif' },
			{ name: 'NetSuite', src: '/media/logos/netsuite.avif' },
			{ name: 'Alumio', src: '/media/logos/alumio.avif' },
			{ name: 'Klaviyo', src: '/media/logos/klaviyo.avif' },
			{ name: 'Shopify', src: '/media/logos/shopify.avif' },
			{ name: 'WooCommerce', src: '/media/logos/woocommerce.avif' },
			{ name: 'BigCommerce', src: '/media/logos/bigcommerce.avif' }
		]
	});

// ─── Shopify Partner ──────────────────────────────────────────────────────────

export const homeShopify = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		paragraphs: z.array(z.string()),
		cta: z.object({ label: z.string(), href: z.string() }),
		logoSrc: z.string()
	})
	.parse({
		eyebrow: 'Shopify Partner',
		heading: 'Shopify & Shopify Plus',
		paragraphs: [
			"As a certified Shopify Partner, I've built and optimised Shopify and Shopify Plus stores across a range of DTC and retail brands — from custom theme development and checkout extensions to full platform migrations. If Shopify is the right fit for your business, I can get the most out of it."
		],
		cta: { label: 'Explore Shopify Services', href: '/services' },
		logoSrc: '/media/shopify/shopify-partner-logo.svg'
	});

// ─── Contact CTA ──────────────────────────────────────────────────────────────

export const homeContact = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse({
		eyebrow: 'Get In Touch',
		heading: "Looking for someone to own your digital commerce stack?",
		subheading:
			"Whether you need a full-time lead, a consultant for a specific project, or someone to untangle a complex integration — I'd love to hear what you're working on.",
		primaryCta: { label: 'Email', href: '#email' },
		secondaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/olivergbagley/' }
	});
