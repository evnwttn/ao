import { Session } from "./Session";

export interface UserLoginData {
  email: `${string}@${string}.${string}`;
  password: string;
  id: any;
  sessions: Session[];
}
