import { User } from './user.model';
import { PlayedGame } from './playedgame.model';

export class UserScore {
  playedgame: PlayedGame;
  user: User;
  userscore: number;
}
