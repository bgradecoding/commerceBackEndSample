export type PostAdmin = {
  adlvno: number;
  adid: string;
  adpw: string;
  adname: string;
  adress: string;
  findpass_que: string;
  findpass_ans: string;
  email: string;
  tel: string;
  depart: string;
  duty: string;
};

export type GetAdmin = {
  adid: string;
  adname: string;
  email: string;
  depart: string;
  duty: string;
  lvname: string;
};

export type LoginAdmin = {
  adid: string;
  adpw: string;
  adname: string;
  depart: string;
  duty: string;
  lvname: string;
  lvcode: string;
};

export type JwtAdmin = {
  adid: string;
  lvcode: string;
};
