import { Deserializable } from './deserializable.model';
export class User implements Deserializable {

  constructor(userid: number, name: string, nickname: string, email: string) {
    this.userid = userid;
    this.name = name;
    this.nickname = nickname;
    this.email = email;
  }
  userid: number;
  name: string;
  nickname: string; // Should be unique
  email: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
