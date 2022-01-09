const mysql_dbc = require("./database");



exports.authModel = async function () {
  const connection = mysql_dbc.init();
  await connection.query(
    "select * from tb_project;",
    function (error, results, fields) {
      connection.end();
      if (error) throw error;
      console.log(results);
    }
  );
};
