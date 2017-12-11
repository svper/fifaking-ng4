import * as mdls from "./models";

export interface Match {
    home_user: mdls.User;
    away_user: mdls.User;
    creator: mdls.User;
    home_competitor_team: string;
    away_competitor_team: string;
    competition: mdls.Competition;
    home_score: number;
    away_score: number;
    unofficial: boolean;
    team_selection: string;
    match_type: number;
    home_elo: number;
    away_elo: number;
    created_at:Date;
  }