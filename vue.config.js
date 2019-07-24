const proxy = require('http-proxy-middleware');

//'http://39.106.224.66:8080/v1/'
module.exports = {
  devServer:{
    proxy:{
      '/api':{
          target: 'http://39.106.224.66:8080/v1',//代理地址，这里设置的地址会代替axios中设置的baseURL
          changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            //ws: true, // proxy websockets
            //pathRewrite方法重写url
          pathRewrite: {
            '^/api': '/' 
                //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
          }
      }
    }
  },
}