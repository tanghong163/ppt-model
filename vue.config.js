/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 09:18:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 09:35:33
 * @FilePath: \ppt-model\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/ppt-model/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        //注意：sass-loader将文件引用写入每个组件，适合全局引入变量，但不适合在单页面应用中添加样式，如果是全局样式（非变量），建议在main.js里引入
        // 路径支持别名的写法，案例就是用了路径别名，如果你没有在项目里设置，也可以自己手动设置即可
        // sass-loader v10以下老版本 用的是prependData，不是additionalData
        // 给 sass-loader 传递选项
        // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
        // 因为 `scss` 语法在内部也是由 sass-loader 处理的
        // 但是在配置 `data` 选项的时候
        // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
        // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
        additionalData: `
        @import '~@/assets/styles/variable.scss';
        @import '~@/assets/styles/mixin.scss';`
      },
      less: {
        lessOptions: {
          // 在使用babel-plugin-import来帮助ant-design-vue按需组件和样式引入时, less、less-loader导致的错误解决
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      // 在public的index.html文件中可以通过htmlWebpackPlugin.options.title获取网页窗口的标题名称
      args[0].title = 'ppt项目';
      return args;
    });
  },
  devServer: {
    proxy: {
      // '^/api': {
      //   target: 'http://localhost:8888',
      //   pathRewrite: {
      //     '^/api': ''
      //   },
      //   changeOrigin: true
      // },
      '^/uploadImage': {
        target: 'http://localhost:8089/',
        changeOrigin: true
      }
    }
  }
});
