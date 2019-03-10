import {Exception} from "../core/Exception";

export class NotExtended extends Exception {
  name: string = "NOT_EXTENDED";

  constructor(message: string) {
    super(510, message);
  }
}
