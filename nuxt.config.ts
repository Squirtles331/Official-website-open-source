// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 应用配置
  app: {
    head: {
      title: '开源官网 - 现代化企业官网解决方案',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '一个通用的开源官网解决方案，适用于企业官网、产品官网、个人品牌网站等多种场景' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // 开发工具
  devtools: { enabled: true },

  // TypeScript 配置
  typescript: {
    typeCheck: true
  },

  // CSS 配置
  css: ['~/assets/css/main.scss'],

  // 模块配置
  modules: [
    // SEO
    '@nuxtjs/seo',
    // Google Fonts
    '@nuxtjs/google-fonts',
    // VueUse
    '@vueuse/nuxt',
    // Pinia状态管理
    '@pinia/nuxt'
  ],

  // Google Fonts 配置
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Noto Sans SC': [400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false
  },



  // SEO配置
  site: {
    url: 'https://your-domain.com',
    name: '开源官网',
    description: '一个通用的开源官网解决方案'
  },

  // 运行时配置
  runtimeConfig: {
    // 服务端私有配置
    apiSecret: '',
    
    // 客户端公共配置
    public: {
      apiBase: '/api',
      siteUrl: 'https://your-domain.com'
    }
  },

  // 构建配置
  build: {
    transpile: ['@headlessui/vue']
  },

  // Vite 配置
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    }
  },

  // 兼容性日期
  compatibilityDate: '2024-12-27'
}) 