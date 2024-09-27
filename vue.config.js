const { defineConfig } = require('@vue/cli-service')
const { VuetifyLoaderPlugin } = require('vuetify-loader')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ]
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})
