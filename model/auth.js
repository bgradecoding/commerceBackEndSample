const mysql_dbc = require("./database");
const connection = mysql_dbc.init();


exports.authModel = function () {
  
  return {
    mVerifyUserInfo: async function () {
      await connection.query(
        "SELECT * from city",
        function (error, results, fields) {
          connection.end();
          if (error) throw error;
          console.log(results);
        }
      );
    },
    mGetUserInfo: function () {
      connection.query(
        "SELECT 1 + 1 AS solution",
        function (error, results, fields) {
          connection.end();
          if (error) throw error;
          return results;
        }
      );
    },
  };
};
