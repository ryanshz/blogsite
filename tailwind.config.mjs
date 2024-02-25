/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ['lofi', 'business', 'synthwave', 'cyberpunk', 'cmyk'],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
