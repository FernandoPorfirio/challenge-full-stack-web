import { Timestamp } from "typeorm";

interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdat: Timestamp;
  actived: boolean;
}

export default IUser;
