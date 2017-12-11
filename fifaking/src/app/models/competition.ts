import * as mdls from "./models";

export interface Competition {
    name: string;
    admin: mdls.User;
    location: string;
    seed_fixtures: boolean;
    game: number;
    competition_type: number;
    start_date:Date;
    created_at:Date;
    matches:mdls.Match[];
  }