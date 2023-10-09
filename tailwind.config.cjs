/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-1': '#03001C',
				'dark-2': '#301E67',
				'light-1': '#5B8FB9',
				'light-2': '#B6EADA',

				'gray-1': '#D9D9D9',
				'gray-2': '#B6B6B6',
			},
		},
	},
	plugins: [],
}
