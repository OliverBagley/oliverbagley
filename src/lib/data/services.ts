import { z } from 'zod';
import { ServicePillarSchema, ProcessStepSchema, EngagementOptionSchema, TechCategorySchema, BulletItemSchema } from './schemas';
import rawData from '../../../content/services.json';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const servicesHero = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		backgroundImage: z.string(),
		backgroundAlt: z.string()
	})
	.parse(rawData.hero);

// ─── Core service pillars ─────────────────────────────────────────────────────

export const servicesPillars = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		pillars: z.array(ServicePillarSchema)
	})
	.parse(rawData.pillars);

// ─── Approach ─────────────────────────────────────────────────────────────────

export const servicesApproach = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		pillars: z.array(z.object({ icon: z.string(), title: z.string(), description: z.string() })),
		systemsFirst: z.object({
			heading: z.string(),
			paragraphs: z.array(z.string()),
			features: z.array(BulletItemSchema.extend({ icon: z.string() }))
		})
	})
	.parse(rawData.approach);

// ─── Technical capabilities ───────────────────────────────────────────────────

export const servicesTech = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		categories: z.array(TechCategorySchema)
	})
	.parse(rawData.tech);

// ─── Process ──────────────────────────────────────────────────────────────────

export const servicesProcess = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		steps: z.array(ProcessStepSchema)
	})
	.parse(rawData.process);

// ─── Engagement options ───────────────────────────────────────────────────────

export const servicesEngagement = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		options: z.array(EngagementOptionSchema)
	})
	.parse(rawData.engagement);

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const servicesCta = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse(rawData.cta);
