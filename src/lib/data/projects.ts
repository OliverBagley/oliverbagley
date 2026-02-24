import { z } from 'zod';
import { ProjectSchema } from './schemas';

export type { Project } from './schemas';

export const projects = z.array(ProjectSchema).parse([
	{
		slug: 'dll-digital-catalog',
		title: 'DLL Group Digital Catalog',
		description:
			'Designed and built a responsive digital catalog for healthcare vehicle exhibitions — optimised for iPad display environments and built to replace printed materials at trade shows.',
		image: '/media/images/work_thumbs/dll_digital_catalog_thumb.jpg',
		tags: ['Development', 'Design', 'Photography']
	},
	{
		slug: 'fordpass',
		title: 'FordPass Transformation',
		description:
			'Led end-to-end research and UX strategy to reimagine how Ford dealers sell cars and manage aftercare — mapping customer journeys and identifying friction points across the full ownership lifecycle.',
		image: '/media/images/work_thumbs/ford_thumb_1.jpg',
		tags: ['Strategy', 'UX/UI', 'Research']
	},
	{
		slug: 'fox-finance',
		title: 'Fox Smart Finance',
		description:
			'Full product build from zero: brand identity, UX design, and full-stack development of a finance tracking web app. Sole developer and designer from brief to live product.',
		image: '/media/images/work_thumbs/fox_thumb.jpg',
		tags: ['Full-Stack', 'Product', 'Brand']
	},
	{
		slug: 'ankura-services',
		title: 'Ankura Services',
		description:
			'Built the complete digital presence for a new marketing services startup — brand identity, website, and go-to-market collateral — from initial brief through to live launch.',
		image: '/media/images/work_thumbs/ankura_thumb.jpg',
		tags: ['Brand', 'Web', 'Marketing']
	},
	{
		slug: 'calgary-brewing',
		title: 'Calgary Brewing Co.',
		description:
			'Created a distinctive visual identity and packaging system for a craft brewery — spanning bottle and can design, brand guidelines, and advertising materials.',
		image: '/media/images/work_thumbs/calgary_thumb.jpg',
		tags: ['Brand', 'Product', 'Advertising']
	}
]);
