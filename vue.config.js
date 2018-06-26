module.exports = {
  lintOnSave: true,
  baseUrl: process.env.NODE_ENV === 'production'
    ? ''
    : '',
  outputDir: 'dist',
  assetsDir: './static/',

  pages: {
    index: {
       // entry for the page
       entry: 'src/pages/index/index.ts',
       // the source template
       template: 'public/index.html',
       // output as dist/index.html
       filename: 'index.html'
    },
    login: 'src/pages/login/index.ts'
  },

  runtimeCompiler: false,
  productionSourceMap: false,

  css: {
    sourceMap: true
  },

  devServer: {
    port: '8080',
    proxy: {
      '/api': {
        target: 'https://api.xxx.com/',
        changeOrigin: true,
        pathRewrite: {
          '^api/': ''
        },
        headers: {
          Referer: 'https://api.xxx.com/'
        }
      }
    }
  },

  pwa: {
    name: 'showcase'
  }
}
