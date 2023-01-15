// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['UseFetchDemo'].includes(tag),
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      preload: ['javascript', 'vue', 'html'],
      theme: 'monokai',
    },
  },
});
