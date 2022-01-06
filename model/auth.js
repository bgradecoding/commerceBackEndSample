const mysql_dbc = require("./database");

module.exports = function () {
  const connection = mysql_dbc.init();
  return {
    mVerifyUserInfo: function () {
      connection.query(
        "SELECT 1 + 1 AS solution",
        function (error, results, fields) {
          connection.end();
          if (error) throw error;
          return results;
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
