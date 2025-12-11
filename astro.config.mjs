// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.png',
			plugins: [starlightThemeNext()],
			title: 'iBear Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dBear7x/astro-docs-pages' }],
			sidebar: [
				{
					label: 'Overview',
					autogenerate: { directory: 'overview' },
				},
				{
					label: 'Python',
					autogenerate: { directory: 'python' },
				},
				{
					label: 'Common',
					autogenerate: { directory: 'common' },
				}
			],
		}),
	],
});
