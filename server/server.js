/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-18 11:18:49
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-19 16:47:26
 * @FilePath: \ppt-model\server\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router/index');
const path = require('path');
// 跨域请求处理
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法
  if (req.method == 'OPTIONS') {
    res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  } else {
    next();
  }
});

// 公开静态文件夹，匹配`虚拟路径img` 到 `真实路径public` 注意这里  /img/ 前后必须都要有斜杠！！！
// __dirname  ---> D:\Projects\Practice\vue\vueCoding\ppt-model\server
// 这么设置后express 会在静态资源目录下查找文件，所以不需要把静态目录/server/public作为url的一部分
// 给静态资源文件创建一个虚拟的文件前缀(实际上文件系统中并不存在) ，
app.use('/img/', express.static('./public/'));
// app.use('/img', express.static(__dirname + '/public'));
// app.use('img', express.static(path.join(__dirname, '/public/')));
// 挂载处理post请求的插件
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 挂载路由
app.use(router);

//监听8888端口, 开启服务
app.listen(8089, () => {
  console.log('Server is running on port 8089');
});
