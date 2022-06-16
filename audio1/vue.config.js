const path = require('path'); //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

function onProxyRes(proxyRes){
  const oldCookie = proxyRes.headers["set-cookie"];
  if (oldCookie == null || oldCookie.length === 0) {
    delete proxyRes.headers['set-cookie']
    return
  }
  const oldCookieItems = oldCookie[0].split(";");
  let newCookie = "";
  for (let i = 0; i < oldCookieItems.length; ++i) {
    if (newCookie.length > 0)
      newCookie += ';'
    if (oldCookieItems[i].indexOf('Path=') >= 0)
      newCookie += 'Path=/'
    else
      newCookie += oldCookieItems[i]
  }
  proxyRes.headers['set-cookie'] = [newCookie]
}

module.exports = {
  outputDir: "h5_enterpriserpass",
  publicPath: '/h5_enterpriserpass',
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src')) //根据目录的层级来决定，也可以自行设
      .set('assets', resolve('./src/assets'))
  },
  lintOnSave: false,
  devServer: {
    proxy: {
      '/testApis': {
        target: 'http://58.210.88.98:10087/receivecode',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/testApis': ''
        },
        onProxyRes
      },
      '/proApis': {
        target: 'http://thirdapps.ksecard.cn:12503/receivecode',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/apis': ''
        },
        onProxyRes
      }
    }
  },
}