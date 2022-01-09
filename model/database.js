const mysql = require("mysql");

exports.init = function () {
  console.log('data base start')
      return mysql.createConnection({
        host: process.env.DB_HOST, // 호스트 주소
        user: process.env.DB_USER, // mysql user
        password: process.env.DB_PASSWORD, // mysql password
        database: process.env.DB_DATABASE, // mysql 데이터베이스
      });
};
