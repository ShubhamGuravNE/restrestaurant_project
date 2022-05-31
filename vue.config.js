const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: "/<restrestaurant_project>/",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/restrestaurant_project/'
    : '/',
})
