import { Deserializable } from './deserializable.model';
export class Game implements Deserializable {
    gameid: number;
    name: string;
    minallowedplayercount: number;
    maxallowedplayercount: number;
    scoringtemplate: string;
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }
