import { z } from 'zod';
import { StatSchema, WorkApproachPillarSchema, CapabilityCategorySchema } from './schemas';
import rawData from '../../../content/work.json';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const workHero = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		backgroundImage: z.string(),
		backgroundAlt: z.string(),
		stats: z.array(StatSchema)
	})
	.parse(rawData.hero);

// ─── Approach ─────────────────────────────────────────────────────────────────

export const workApproach = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		pillars: z.array(WorkApproachPillarSchema)
	})
	.parse(rawData.approach);

// ─── Projects section headings ────────────────────────────────────────────────

export const workProjectsSection = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string()
	})
	.parse(rawData.projectsSection);

// ─── Capabilities ─────────────────────────────────────────────────────────────

export const workCapabilities = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string(),
		categories: z.array(CapabilityCategorySchema)
	})
	.parse(rawData.capabilities);

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const workCta = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse(rawData.cta);
