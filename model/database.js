const mysql = require("mysql2/promise");

const connPool = mysql.createPool({
        host: process.env.DB_HOST, // 호스트 주소
        user: process.env.DB_USER, // mysql user
        password: process.env.DB_PASSWORD, // mysql password
        database: process.env.DB_DATABASE, // mysql 데이터베이스
        port : 3305
      });

module.exports = connPool;