let projectName = process.argv[3]
let glob = require('glob')

function getEntry() {
  let entries = {}
  if (process.env.NODE_ENV == 'production') {
    entries = {
      index: {
        // page的入口
        entry: 'src/views/' + projectName + '/' + projectName + '.js',
        // 模板来源
        template: 'public/' + projectName + '.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        title: projectName,
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    }
  } else {
    let items = glob.sync('./src/views/*/*.js')
    for (let i in items) {
      let filepath = items[i]
      let fileList = filepath.split('/');
      let fileName = fileList[fileList.length - 2];
      entries[fileName] = {
        entry: `src/views/${fileName}/${fileName}.js`,
        // 模板来源
        template: `public/${fileName}.html`,
        // 在 dist/index.html 的输出
        filename: `${fileName}.html`,
        title: `${fileName}`,
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', fileName]
      }
    }
  }
  return entries
}

let pages = getEntry()

module.exports = {

  outputDir: 'dist/' + projectName,
  pages: pages,
  lintOnSave: false,
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: 1115, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器

    // 配置多个代理
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
    //       '^/api': '/' 
    //     }
    //   },
    //   "/foo": {
    //     target: "<other_url>"
    //   }
    // }
  }
}
