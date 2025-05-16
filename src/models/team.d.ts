import type {userType} from "./user";

export type teamType = {
  id: number;
  name: string,
  description: string,
  expireTime?: Date,
  maxNum: number,
  password: string,
  status:number ,
  createTime: string,
  createUser?:userType;
};
