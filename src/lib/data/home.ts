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
		'I architect eCommerce platforms, design seamless user experiences, and lead digital product teams from strategy through execution. Currently scaling DTC operations at',
	currentRole: { name: 'Frog Bikes', href: 'https://www.frogbikes.com' },
	primaryCta: { label: 'View Projects', href: '#work' },
	secondaryCta: { label: 'LinkedIn →', href: 'https://www.linkedin.com/in/olivergbagley/' },
	stats: [
		{ value: '8+', label: 'Years Experience', color: 'terracotta' },
		{ value: '£10M+', label: 'Revenue Generated', color: 'amber' }
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
	eyebrow: 'Full-Stack Solutions',
	heading: 'Complete digital commerce ecosystem',
	subheading:
		'From online storefronts to in-store experiences, I architect and deliver end-to-end commerce solutions that unify your entire sales operation.',
	pillars: [
		{
			icon: 'cart',
			title: 'eCommerce Platforms & Presence',
			description:
				'Comprehensive coverage from Shopify to Magento, delivering frictionless online shopping experiences, and optimized user journeys that convert browsers into buyers.',
			bullets: [
				'Migration, Integration and disaster recovery',
				'Payment gateway integration',
				'Conversion rate optimization'
			]
		},
		{
			icon: 'database',
			title: 'Systems & Integration',
			description:
				'Backend systems, APIs, and third-party integrations that connect your commerce stack to ERPs, CRMs, and business intelligence tools.',
			bullets: ['API & systems development', 'ERP & CRM integration expertise', 'Data migration & automation']
		},
		{
			icon: 'pos',
			title: 'In-Store & POS',
			description:
				'Unified retail experiences with Shopify POS, inventory sync, and omnichannel customer journeys across digital and physical touchpoints.',
			bullets: ['Shopify POS implementation', 'Real-time inventory management', 'Omnichannel customer data']
		}
	],
	unified: {
		heading: 'One partner, end-to-end',
		paragraphs: [
			"Working with multiple agencies for web, mobile, and in-store creates complexity and misalignment. I provide a unified approach to digital commerce, ensuring your online storefront, physical retail experiences, and backend systems work together seamlessly.",
			"Whether you're launching a new brand, scaling DTC operations, or modernizing legacy systems, I bring the strategic vision and technical execution to build commerce solutions that grow with your business."
		],
		features: [
			{
				icon: 'check',
				title: 'Systems-First Approach',
				description:
					'Comprehensive operations and system based approach ensure every technical decision aligned with your business goals and customer needs.'
			},
			{
				icon: 'bolt',
				title: 'Rapid Development & Implementation',
				description: 'Agile development process that delivers results quickly without sacrificing quality.'
			},
			{
				icon: 'chart',
				title: 'Scale with pace',
				description:
					'Comprehensive development built for business that want to scale quickly, built to handle growth, from startup launch to enterprise-level traffic and complexity.'
			}
		]
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
		eyebrow: 'Platform Expertise',
		heading: 'Trusted eCommerce Platforms',
		logos: [
			{ name: 'Shopify', src: '/media/logos/shopify.avif' },
			{ name: 'Magento', src: '/media/logos/magento.avif' },
			{ name: 'Klaviyo', src: '/media/logos/klaviyo.avif' },
			{ name: 'NetSuite', src: '/media/logos/netsuite.avif' },
			{ name: 'Alumio', src: '/media/logos/alumio.avif' },
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
		eyebrow: 'Official Partner',
		heading: 'Expertise you can trust',
		paragraphs: [
			"Shopify is the leading all-in-one commerce platform for start-ups to high-growth businesses. Powering millions of businesses worldwide, Shopify gives independent brands the tools to sell online, in person, and everywhere in between.",
			"As a certified Shopify Partner, I act as your strategic guide to the platform. I help ambitious brands leverage Shopify's robust ecosystem to build custom, high-converting storefronts that are easy to manage and ready to scale."
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
		heading: "Let's build something together",
		subheading:
			"Whether you're looking for strategic guidance, hands-on execution, or a full-time addition to your team, I'd love to hear about your project.",
		primaryCta: { label: 'Email', href: '#email' },
		secondaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/olivergbagley/' }
	});
