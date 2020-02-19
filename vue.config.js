const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit: 75   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
                    //设计稿10等分之后的值
})
module.exports = {
    runtimeCompiler:true,
    lintOnSave:false, //关闭enlint语法检查
    css: { // 添加postcss配置
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }

      },
      devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:3001',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }


}