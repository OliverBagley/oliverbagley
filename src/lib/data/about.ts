import { z } from 'zod';
import { ApproachStepSchema, SkillCategorySchema, ExperienceRoleSchema } from './schemas';
import rawData from '../../../content/about.json';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const aboutHero = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		backgroundImage: z.string(),
		backgroundAlt: z.string()
	})
	.parse(rawData.hero);

// ─── Story ────────────────────────────────────────────────────────────────────

export const aboutStory = z
	.object({
		eyebrow: z.string(),
		image: z.object({ src: z.string(), alt: z.string() }),
		paragraphs: z.array(z.string())
	})
	.parse(rawData.story);

// ─── Experience ───────────────────────────────────────────────────────────────

export const aboutExperience = z
	.object({
		current: ExperienceRoleSchema,
		previous: ExperienceRoleSchema
	})
	.parse(rawData.experience);

// ─── Approach ─────────────────────────────────────────────────────────────────

export const aboutApproach = z
	.object({
		heading: z.string(),
		steps: z.array(ApproachStepSchema)
	})
	.parse(rawData.approach);

// ─── Skills ───────────────────────────────────────────────────────────────────

export const aboutSkills = z
	.object({
		heading: z.string(),
		categories: z.array(SkillCategorySchema),
		toolsHeading: z.string(),
		tools: z.array(z.string())
	})
	.parse(rawData.skills);

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const aboutCta = z
	.object({
		heading: z.string(),
		subheading: z.string(),
		primaryCta: z.object({ label: z.string(), href: z.string() }),
		secondaryCta: z.object({ label: z.string(), href: z.string() })
	})
	.parse(rawData.cta);
