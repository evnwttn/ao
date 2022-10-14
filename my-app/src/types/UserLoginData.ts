import { Session } from "./Session";

export interface UserLoginData {
  email: string;
  password: string;
  id: any;
  sessions: Session[];
}
