import { z } from 'zod';
import { LinkSchema } from './schemas';

const NavSchema = z.object({
	links: z.array(LinkSchema),
	cta: LinkSchema
});

const FooterSchema = z.object({
	copyright: z.string(),
	shopifyPartnerLogo: z.string(),
	socialLinks: z.array(LinkSchema),
	legalLinks: z.array(LinkSchema)
});

export const siteNav = NavSchema.parse({
	links: [
		{ label: 'About', href: '/about' },
		{ label: 'Work', href: '/work' },
		{ label: 'Services', href: '/services' }
	],
	cta: { label: "Let's Talk", href: '/#contact' }
});

export const serviceNavLinks = [
	{ label: 'eCommerce Development', href: '/services/ecommerce-development' },
	{ label: 'Integrations & Systems', href: '/services/integrations-systems' },
	{ label: 'Consultancy', href: '/services/consultancy' }
] as const;

export const siteFooter = FooterSchema.parse({
	copyright: '© 2026 Oliver Bagley. All rights reserved.',
	shopifyPartnerLogo: '/media/shopify/ShopifyPlus_Secondary.png',
	socialLinks: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/olivergbagley/', external: true }
	],
	legalLinks: [
		{ label: 'Privacy', href: '/privacy' },
		{ label: 'Terms', href: '/terms' }
	]
});
