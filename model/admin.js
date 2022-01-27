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


exports.registAdmin = async function ( newAdminInfo ) {
  
  const query = `INSERT INTO tb_admin VALUES (null, ${newAdminInfo.adlvno}, ${ newAdminInfo.adid },
    ${newAdminInfo.adpw},${newAdminInfo.adname},'0d6c64033ca00a7b67df4ed788cf04f3','127.0.0.1','','','','','-','','-','','개발팀','팀원','',0,'',NOW(),NOW());`

  try{
    const connection = await mysql_dbc.getConnection(async conn=>conn);
    const [results] = await connection.query(query);

    return results[0]

  }catch(err){
    throw err
  }
};