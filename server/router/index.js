/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-18 11:27:13
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-20 14:37:52
 * @FilePath: \ppt-model\server\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const query = require('../database/mysql');
const upload = require('../multer/upload');

const { Router } = require('express');
const router = new Router();

// 上传图片
router.post('/uploadImage', function (req, res) {
  upload(req, res).then(imgsrc => {
    console.log('插入', imgsrc);
    console.log('文件名', req.file.filename);
    // let sql = `insert into img (url, name) values('${imgsrc}','${req.file.filename}')`;
    let sql = `update img set url='${imgsrc}',name='${req.file.filename}' where id='1'`;
    query(sql, (err, results) => {
      if (err) {
        console.log('数据库操作失败');
        formatErrorMessage(res, err);
      } else {
        console.log('操作成功');
        res.send({
          code: 'ok',
          message: '上传成功',
          data: {
            url: imgsrc
          }
        });
      }
    });
  });
});

// 格式化错误信息
const formatErrorMessage = (res, message) => {
  res.status(500).send({
    code: 'error',
    message: message || ''
  });
};

module.exports = router;
