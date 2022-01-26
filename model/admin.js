const mysql_dbc = require("./database");

exports.loginAdmin = async function ( id, password ) {
  
  const query = "select * from tb_admin where ADID ='"+id+"' and ADPW='"+password+"';"

  try{
    const connection = await mysql_dbc.getConnection(async conn=>conn);
    const [results] = await connection.query(query);

    return results[0]

  }catch(err){
    throw err
  }
};


exports.getAdmin = async function () {
  
  const query = "select ADNO, LV.ADLVNO, LVNAME, ADNAME, DEPART, RDTIME from tb_admin AD, tb_admin_level LV WHERE AD.ADLVNO = LV.ADLVNO;"

  try{
    const connection = await mysql_dbc.getConnection(async conn=>conn);
    const [results] = await connection.query(query);

    return results[0]

  }catch(err){
    throw err
  }
};