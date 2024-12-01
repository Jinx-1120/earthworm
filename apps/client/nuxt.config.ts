// https://nuxt.com/docs/api/configuration/nuxt-config

const appScripts: any = [];

export default defineNuxtConfig({
  ssr: false,
  // default is true, reference to https://nuxt.com/docs/guide/directory-structure/components
  // components: true,
  imports: {
    autoImport: false,
  },
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: "Earthworm",
      link: [{ rel: "icon", href: "/favicon.ico" }],
      script: appScripts,
    },
  },
  css: ["~/assets/css/globals.css"],
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/test-utils/module",
    "@hypernym/nuxt-anime",
    "@nuxt/image",
  ],
  plugins: ["~/plugins/logto.ts", "~/plugins/http.ts"],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE,
      endpoint: process.env.NUXT_LOGTO_ENDPOINT,
      appId: process.env.NUXT_LOGTO_APP_ID,
      backendEndpoint: process.env.NUXT_BACKEND_ENDPOINT,
      signInRedirectURI: process.env.NUXT_LOGTO_SIGN_IN_REDIRECT_URI,
      signOutRedirectURI: process.env.NUXT_LOGTO_SIGN_OUT_REDIRECT_URI,
      helpDocsURL: process.env.NUXT_HELP_DOCS_URL,
    },
  },
  build: {
    transpile: ["vue-sonner"],
  },
});
