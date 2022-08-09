import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// css: ['~/assets/css/tailwind.css'],
	modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
	// buildModules: ['@nuxt/image'],
	typescript: {
		shim: false
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => ['UseFetchDemo'].includes(tag)
		}
	},
	components: {
		global: true,
		dirs: ['~/components']
	},
	content: {
		// https://content.nuxtjs.org/api/configuration
	},
	image: {
		// Options
	},
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	}
});
