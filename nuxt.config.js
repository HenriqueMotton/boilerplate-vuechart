import environment from './lib/environment'
import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Park Henri',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'd4sign-domain-verification', name: 'd4sign-domain-verification',content: 'd3f378e8-f6ab-47cd-a98b-4cb40d038c52'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' }
    ]
  },

  // Adicionado para parar a mensagem de enviar os dados
  telemetry: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/chart/chartLine.js', mode: 'client' },
    { src: '~/plugins/chart/chartBar.js', mode: 'client' },
    { src: '~/plugins/chart/chartPie.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/home', extensions: ['vue'] },
    { path: '~/components/charts', extensions: ['vue'] },
    { path: '~/components/charts/lineChart', extensions: ['vue'] },
    { path: '~/components/layouts/home', extensions: ['vue'] },
    { path: '~/components/layouts/outside', extensions: ['vue'] },
    { path: '~/components/frameworks', extensions: ['vue'] },
    { path: '~/components/install', extensions: ['vue'] },
    { path: '~/components/shared', extensions: ['vue'] },
    { path: '~/layouts', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  alias: {
    'lib': resolve(__dirname, './lib'),
    'node_modules': resolve(__dirname, './node_modules'),
    'svg': resolve(__dirname, './assets/svg'),
    './': resolve( './*')
  },

  auth: { 
    strategies: { 
      local: false, 
      keycloak: { 
        scheme: 'oauth2', 
        endpoints: { 
          authorization: `${environment.KC_URL}/auth/realms/${environment.KC_REALM}/protocol/openid-connect/auth`, 
          token: `${environment.KC_URL}/auth/realms/${environment.KC_REALM}/protocol/openid-connect/token`, 
          userInfo: `${environment.KC_URL}/auth/realms/${environment.KC_REALM}/protocol/openid-connect/userinfo`, 
          logout: `${environment.KC_URL}/auth/realms/${environment.KC_REALM}/protocol/openid-connect/logout?redirect_uri=${encodeURIComponent('http://localhost:3000')}`,
        }, 
        token: { 
          property: 'access_token', 
          type: 'Bearer', 
          name: 'Authorization', 
          maxAge: 300 
        }, 
        refreshToken: { 
          property: 'refresh_token', 
          maxAge:60 * 60 * 24 * 30 
        }, 
        responseType: 'code',
        grantType: 'authorization_code', 
        clientId: `${environment.KC_CLIENT_ID}`, 
        scope: ['openid', 'profile', 'email'], 
        codeChallengeMethod: 'S256' 
      } 
    }, 
    redirect: { 
      login: '/login', 
      logout: '/ ', 
      home: '/' 
    } 
  },
  // proxy: { 
  //   '/auth': { 
  //     target: `${environment.KC_URL}`
  //   } 
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
