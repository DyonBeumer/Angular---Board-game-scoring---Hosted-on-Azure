import { Deserializable } from './deserializable.model';
export class Game implements Deserializable {

    constructor(gameid: number, name: string, minapc: number, maxapc: number, template: object) {
      this.gameid = gameid;
      this.name = name;
      this.minallowedplayercount = minapc;
      this.maxallowedplayercount = maxapc;
      this.scoringtemplate = template;
    }
    gameid: number;
    name: string;
    minallowedplayercount: number;
    maxallowedplayercount: number;
    scoringtemplate: object;
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }
