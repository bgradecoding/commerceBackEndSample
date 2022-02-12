CREATE TABLE tb_admin (
  ADNO int(11) NOT NULL auto_increment,
  ADLVNO int(11) NOT NULL default '0',
  ADID varchar(30) NOT NULL default '',
  ADPW varchar(100) default NULL,
  ADNAME varchar(50) default NULL,
  ADRESS varchar(100) default NULL,
  FINDPASS_QUE varchar(255) default NULL,
  FINDPASS_ANS varchar(255) default NULL,
  EMAIL varchar(50) default NULL,
  TEL varchar(20) default NULL,
  DEPART varchar(100) default NULL,
  DUTY varchar(100) default NULL,
  CREATED datetime default NULL,
  UPDATED datetime default NULL,
  PRIMARY KEY  (ADNO),
  UNIQUE KEY ADID (ADID),
  KEY ADLVNO_FK (ADLVNO)
);


CREATE TABLE tb_admin_level (
  ADLVNO int(11) NOT NULL auto_increment,
  LVCODE char(1) NOT NULL default '',
  LVNAME varchar(50) NOT NULL default '',
  PERMIT_MEMBER tinyint(4) default NULL,
  PERMIT_SHOP tinyint(4) default NULL,
  PERMIT_SHOP_GOODS tinyint(4) default NULL,
  PERMIT_SHOP_ORDER tinyint(4) default NULL,
  REMARK varchar(255) default NULL,
  PRIMARY KEY  (ADLVNO)
);