// vue.config.js
module.exports = {
    // 修改的配置
    devServer: {

        proxy: 'http://192.168.10.66:8085'
        
 
 
    },
    configureWebpack: {
      //  devtool: 'source-map'
    },
   
    // productionSourceMap:false,
    lintOnSave: undefined
}