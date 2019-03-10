import {Exception} from "../core/Exception";

export class MovedTemporarily extends Exception {
  name: string = "MOVED_TEMPORARILY";

  constructor(message: string) {
    super(302, message);
  }
}
