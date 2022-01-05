const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // 호스트 주소
  user: process.env.DB_USER, // mysql user
  password: process.env.DB_PASSWORD, // mysql password
  database: process.env.DB_DATABASE, // mysql 데이터베이스
});
connection.connect();
connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
connection.end();
