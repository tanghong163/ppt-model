/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-18 11:26:51
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-19 16:33:21
 * @FilePath: \ppt-model\server\multer\multer-config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const multer = require('multer');

const path = require('path');
const resolve = dir => {
  // D:\Projects\Practice\vue\vueCoding\ppt-model\server\multer
  console.log('__dirname', path.join(__dirname, './', dir));
  // D:\Projects\Practice\vue\vueCoding\ppt-model\server\multer\multer-config.js
  // console.log(__filename);
  return path.join(__dirname, './', dir);
};
let storage = multer.diskStorage({
  // 存储路径
  destination: resolve('../public/images'),
  // 存储名称
  filename: (req, file, cb) => {
    let fileName = +new Date();
    let extName = file.originalname.slice(file.originalname.lastIndexOf('.'));
    cb(null, fileName + extName);
  }
});

var fileFilter = function (req, file, cb) {
  var acceptableMime = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
  // 限制类型
  // null是固定写法
  console.log('file.mimetype', file.mimetype);
  if (acceptableMime.indexOf(file.mimetype) !== -1) {
    cb(null, true); // 通过上传
  } else {
    cb(null, false); // 禁止上传
  }
};

var limits = {
  fileSize: '10MB' //设置限制（可选）
};

// 添加配置
const multerConfig = multer({
  fileFilter,
  storage,
  limits
});

//  导出配置好的multerConfig
module.exports = multerConfig;
