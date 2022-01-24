const mysql_dbc = require("./database");
const connection = mysql_dbc.init();

exports.authModel = function ( id, password) {
  connection.query(
    "select * from tb_admin where ADID ='"+id+"' and ADPW='"+password+"';",
    function (error, results, fields) {
      
      if (error) throw error;
      console.log(results)
      connection.end();
    }
  );
  
};
