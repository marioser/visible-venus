import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			// Tu color de acento preferido. Indigo es el más cercano a los valores predeterminados de Starlight.
			accent: colors.cyan,
			// Tu escala de grises preferida. Zinc es el más cercano a los valores predeterminados de Starlight.
			gray: colors.blueGray,
		  },

		},
	  },
	  plugins: [starlightPlugin()],
	};