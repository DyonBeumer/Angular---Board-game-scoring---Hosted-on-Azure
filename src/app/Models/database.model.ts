import { Deserializable } from './deserializable.model';
import {User} from './user.model';
import {Game} from './game.model';

export class Database implements Deserializable {

  constructor(games: Game[], users: User[]) {
    this.games = games;
    this.users = users;
  }

  users: User[];
  games: Game[];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
