// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	},
	// css: ['~/assets/css/tailwind.css'],
	modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
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
		highlight: {
			preload: ['javascript', 'vue', 'html'],
			theme: 'monokai'
		}
		// https://content.nuxtjs.org/api/configuration
	},
	image: {
		// Options
	}
});
