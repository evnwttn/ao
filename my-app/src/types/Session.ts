import { Track } from "./Track";

export interface Session {
  sessionTitle: string;
  author: string;
  tracks: Track[];
  parameters: string[];
  id: any;
  user: string;
}
