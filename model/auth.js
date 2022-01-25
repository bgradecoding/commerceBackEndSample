const mysql_dbc = require("./database");

exports.authModel = async function ( id, password ) {
  const connection = await mysql_dbc.getConnection(async conn=>conn);
  const query = "select * from tb_admin where ADID ='"+id+"' and ADPW='"+password+"';"

  try{ 
    const [results] = await connection.query(query);

    return results[0]

  }catch(err){
    console.log('query error'+err);
  }
};
