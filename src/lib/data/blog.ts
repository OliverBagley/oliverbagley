import { z } from 'zod';

// ─── Post Schema ──────────────────────────────────────────────────────────────

export const PostSchema = z.object({
	slug: z.string(),
	title: z.string(),
	date: z.string(),
	readTime: z.string(),
	category: z.string(),
	excerpt: z.string(),
	coverImage: z.string().optional()
});

export type Post = z.infer<typeof PostSchema>;

// ─── Blog Index ───────────────────────────────────────────────────────────────

export const blogHero = z
	.object({
		eyebrow: z.string(),
		heading: z.string(),
		subheading: z.string()
	})
	.parse({
		eyebrow: 'Insights',
		heading: 'Thinking out loud',
		subheading:
			'Notes on digital commerce, systems integration, and building things that hold together — from someone who does it day to day.'
	});

// ─── Posts ────────────────────────────────────────────────────────────────────

export const posts: Post[] = [
	PostSchema.parse({
		slug: 'why-your-ecommerce-stack-has-a-glue-problem',
		title: "Why your eCommerce stack has a glue problem",
		date: 'February 2026',
		readTime: '6 min read',
		category: 'Systems Integration',
		excerpt:
			"Most commerce problems aren't platform problems. They're integration problems — the messy, invisible layer between your storefront, your ERP, and everything in between. Here's how to think about it.",
		coverImage:
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
	})
];
