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

CREATE TABLE tb_member (
  MBID varchar(30) NOT NULL,
  MBLVCODE char(1) NOT NULL default '',
  MBPW varchar(100) NOT NULL default '',
  MBNAME varchar(100) default NULL,
  MBNICK varchar(100) default NULL,
  EMAIL varchar(100) default NULL,
  TEL1 char(3) default NULL,
  TEL2 varchar(9) default NULL,
  TEL3 varchar(10) default NULL,
  ZIP varchar(7) default NULL,
  ADDR varchar(100) default NULL,
  ADDR1 varchar(200) default NULL,
  BIRTH varchar(10) default NULL,
  SEX char(4) NOT NULL default '0',
  TOTAL_POINT int(11) NOT NULL default '0',
  TOTAL_COUPON int(11) NOT NULL default '0',
  MARRY char(4) NOT NULL default '0',
  FINDPASS_QUE varchar(255) default NULL,
  FINDPASS_ANS varchar(255) default NULL,
  MBSTATUS varchar(10) NOT NULL default '0',
  CREATED datetime default NULL,
  UPDATED datetime default NULL,
  PRIMARY KEY  (MBID)
);

CREATE TABLE tb_coupon (
  CPNO int(11) unsigned NOT NULL auto_increment,
  GDNO int(11) unsigned NOT NULL default '0',
  GNAME varchar(200) default NULL,
  COUP_NAME varchar(200) default NULL,
  COUP_TYPE tinyint(4) NOT NULL default '0',
  ORDER_AMOUNT int(11) NOT NULL default '0',
  COUPON_NUMBER varchar(20) default NULL,
  PAY_TYPE tinyint(4) NOT NULL default '0',
  DISC_TYPE tinyint(4) NOT NULL default '0',
  DISC_PRICE float(10,2) NOT NULL default '0.00',
  DISC_RATE float(5,2) NOT NULL default '0.00',
  LIMIT_PRICE float(10,2) NOT NULL default '0.00',
  LIMIT_AMOUNT float(10,2) NOT NULL default '0.00',
  DEAD_TYPE tinyint(4) NOT NULL default '0',
  DEAD_TERM varchar(10) default NULL,
  DISTDATE_START varchar(10) default NULL,
  DISTDATE_END varchar(10) default NULL,
  STATE tinyint(4) NOT NULL default '0',
  CREATED datetime default NULL,
  PRIMARY KEY  (CPNO),
  KEY GDNO_FK (GDNO)
);

CREATE TABLE tb_member_coupon (
  MBCPNO int(11) unsigned NOT NULL auto_increment,
  CPNO int(11) unsigned NOT NULL default '0',
  GDNO int(11) unsigned NOT NULL default '0',
  ORDNO int(10) unsigned NOT NULL default '0',
  MBID varchar(30) default NULL,
  ADID varchar(30) default NULL,
  GNAME varchar(200) default NULL,
  COUP_NAME varchar(200) default NULL,
  COUP_TYPE tinyint(4) NOT NULL default '0',
  PAY_TYPE tinyint(4) NOT NULL default '0',
  DISC_TYPE tinyint(4) NOT NULL default '0',
  DISC_PRICE float(10,2) NOT NULL default '0.00',
  DISC_RATE float(5,2) NOT NULL default '0.00',
  LIMIT_PRICE float(10,2) NOT NULL default '0.00',
  LIMIT_AMOUNT float(10,2) NOT NULL default '0.00',
  DEAD_TYPE tinyint(4) NOT NULL default '0',
  DEAD_TERM varchar(10) default NULL,
  STATE tinyint(4) NOT NULL default '0',
  REMARK varchar(255) default NULL,
  DDTIME datetime default NULL,
  PRIMARY KEY  (MBCPNO)
);

CREATE TABLE tb_member_level (
  MBLVNO int(10) unsigned NOT NULL auto_increment,
  MBLVCODE char(1) NOT NULL default '',
  MBLVNAME varchar(50) NOT NULL default '',
  REMARK varchar(255) default NULL,
  DISCOUNT float(6,2) NOT NULL default '0.00',
  BUY_POINT float(6,2) NOT NULL default '0.00',
  POST_POINT float(6,2) NOT NULL default '0.00',
  CREATED datetime default NULL,
  UPDATED datetime default NULL,
  PRIMARY KEY  (MBLVNO)
)