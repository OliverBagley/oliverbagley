import { z } from 'zod';

// ─── Shared ───────────────────────────────────────────────────────────────────

export const LinkSchema = z.object({
	label: z.string(),
	href: z.string(),
	external: z.boolean().optional()
});
export type Link = z.infer<typeof LinkSchema>;

export const StatSchema = z.object({
	value: z.string(),
	label: z.string()
});
export type Stat = z.infer<typeof StatSchema>;

export const BulletItemSchema = z.object({
	title: z.string(),
	description: z.string()
});
export type BulletItem = z.infer<typeof BulletItemSchema>;

// ─── Projects ─────────────────────────────────────────────────────────────────

export const ProjectSchema = z.object({
	slug: z.string(),
	title: z.string(),
	description: z.string(),
	image: z.string(),
	tags: z.array(z.string())
});
export type Project = z.infer<typeof ProjectSchema>;

// ─── Services ─────────────────────────────────────────────────────────────────

export const ServicePillarSchema = z.object({
	icon: z.string(),
	title: z.string(),
	description: z.string(),
	bullets: z.array(z.string())
});
export type ServicePillar = z.infer<typeof ServicePillarSchema>;

export const ProcessStepSchema = z.object({
	number: z.string(),
	title: z.string(),
	description: z.string()
});
export type ProcessStep = z.infer<typeof ProcessStepSchema>;

export const EngagementOptionSchema = z.object({
	emoji: z.string(),
	title: z.string(),
	description: z.string(),
	callout: z.string()
});
export type EngagementOption = z.infer<typeof EngagementOptionSchema>;

export const TechCategorySchema = z.object({
	icon: z.string(),
	title: z.string(),
	tags: z.array(z.string())
});
export type TechCategory = z.infer<typeof TechCategorySchema>;

// ─── About ────────────────────────────────────────────────────────────────────

export const ApproachStepSchema = z.object({
	number: z.string(),
	title: z.string(),
	description: z.string()
});
export type ApproachStep = z.infer<typeof ApproachStepSchema>;

export const SkillCategorySchema = z.object({
	title: z.string(),
	color: z.enum(['terracotta', 'amber']),
	items: z.array(z.string())
});
export type SkillCategory = z.infer<typeof SkillCategorySchema>;

export const ExperienceRoleSchema = z.object({
	period: z.string(),
	title: z.string(),
	company: z.string(),
	bullets: z.array(z.string())
});
export type ExperienceRole = z.infer<typeof ExperienceRoleSchema>;

// ─── Work page ────────────────────────────────────────────────────────────────

export const WorkApproachPillarSchema = z.object({
	icon: z.string(),
	title: z.string(),
	description: z.string()
});
export type WorkApproachPillar = z.infer<typeof WorkApproachPillarSchema>;

export const CapabilityCategorySchema = z.object({
	title: z.string(),
	description: z.string(),
	tags: z.array(z.string())
});
export type CapabilityCategory = z.infer<typeof CapabilityCategorySchema>;
