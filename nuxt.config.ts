// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  
  plugins: [
    '~/plugins/locomotive-scroll.client.js'
  ],

  css: [
    '@/assets/styles/global.scss'
  ],

  modules: ["@nuxt/icon","nuxt-locomotive-scroll"],

  locomotiveScroll: {
    // module options
    pluginOptions: {
      smooth: true
    }
  },

  

  compatibilityDate: "2024-07-23"
};