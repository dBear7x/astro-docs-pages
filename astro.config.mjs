// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'iBear Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dBear7x/astro-docs-pages' }],
			sidebar: [
				{
					label: 'Knowledge Base',
					autogenerate: { directory: 'knowledge-base' },
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
