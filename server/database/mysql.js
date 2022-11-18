/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-18 11:24:22
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-19 15:23:23
 * @FilePath: \ppt-model\server\database\mysql.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../config/db');

const pool = mysql.createPool(MYSQL_CONFIG);

const query = (sql, callback) => {
  console.log('开始建立数据库链接');
  // 建立数据库连接，如无连接可用则隐式的建立一个数据库连接
  pool.getConnection((error, connection) => {
    debugger;
    if (error) {
      console.log('建立连接失败');
      callback(error, null, null);
    } else {
      console.log('建立连接成功');
      console.log(pool._allConnections.length); //  1
      connection.query(sql, function (qerr, vals, fields) {
        // 释放连接  *注意：释放连接要在 conn.query*
        connection.release();
        callback(qerr, vals, fields);
      });
    }
  });
};

module.exports = query;
