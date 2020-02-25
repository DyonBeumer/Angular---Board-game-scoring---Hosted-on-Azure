import { Deserializable } from './deserializable.model';
import {User} from './user.model';
import {Game} from './game.model';

export class Database implements Deserializable {
  Users: User[];
  Games: Game[];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
