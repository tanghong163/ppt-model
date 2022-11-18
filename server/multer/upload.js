/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-18 11:26:59
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-20 14:49:32
 * @FilePath: \ppt-model\server\multer\upload.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 1. 引入配置好的multerConfig
const multerConfig = require('./multer-config');

// 2. 定义静态变量
const fileName = 'file'; // 上传的 fileName 名称;后续前端上传文件的时候，定义的字段名需要和它一致
const updateBaseUrl = 'http://localhost:8089'; // 上传到服务器地址
const imgPath = '/img/images/'; // 上传到服务器的虚拟目录
// const imgPath = ''; // 上传到服务器的虚拟目录

// 上传接口的 请求参数req  响应参数res
const upload = (req, res) => {
  return new Promise((resolve, reject) => {
    multerConfig.single(fileName)(req, res, function (error) {
      if (error) {
        reject(error);
      } else {
        // `req.file.filename`  请求文件名称后缀
        // `updateBaseUrl + imgPath + req.file.filename` 完整的服务器虚拟目录
        // 可能http://localhost:8090/img/images/1666078418698.jpg
        resolve(updateBaseUrl + imgPath + req.file.filename);
        // resolve(updateBaseUrl + req.file.filename);
      }
    });
  });
};

module.exports = upload;
