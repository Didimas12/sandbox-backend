export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'sandbox',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" },
            { rel: "stylesheet", type: "text/css", href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css" }
        ],
        script: [
            { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" },
            { src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" },
            { src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/style.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    server: {
        port: 3004
    }
}