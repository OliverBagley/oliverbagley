import { z } from 'zod';
import { StatSchema, ServicePillarSchema, BulletItemSchema } from './schemas';
import rawData from '../../../content/home.json';

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

export const homeHero = HeroSchema.parse(rawData.hero);

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

export const homeSolutions = SolutionsSchema.parse(rawData.solutions);

// ─── Platform logos ────────────────────────────────────────────────────────────

const LogoSchema = z.object({ name: z.string(), src: z.string() });

export const homePlatforms = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		logos: z.array(LogoSchema)
	})
	.parse(rawData.platforms);

// ─── Shopify Partner ──────────────────────────────────────────────────────────

export const homeShopify = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		paragraphs: z.array(z.string()),
		cta: z.object({ label: z.string(), href: z.string() }),
		logoSrc: z.string()
	})
	.parse(rawData.shopify);

// ─── Contact CTA ──────────────────────────────────────────────────────────────

export const homeContact = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse(rawData.contact);
