// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.sass'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      title: 'Ahmet Batuhan Kılıç',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { key: 'about', name: 'about', content: 'Ahmet Batuhan Kılıç' },
        {
          key: 'description',
          name: 'description',
          content: 'Ahmet Batuhan Kılıç\'ın kişisel web sitesine hoş geldiniz. Burada benim hakkımda ve projelerim hakkında bilgi bulabilirsiniz.',
        },
        { name: 'author', content: 'Ahmet Batuhan Kılıç' },
        { name: 'keywords', content: 'Ahmet Batuhan Kılıç, kişisel web sitesi, projeler, yazılım' },
        { name: 'robots', content: 'index, follow' },
      ],
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'tr',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'tr',
        iso: 'tr-TR',
      },
    ],
  },
});
