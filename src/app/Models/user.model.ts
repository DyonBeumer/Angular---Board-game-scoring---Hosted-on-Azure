import { Deserializable } from './deserializable.model';
export class User implements Deserializable {
  userid: number;
  name: string;
  nickname: string; // Should be unique
  email: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
