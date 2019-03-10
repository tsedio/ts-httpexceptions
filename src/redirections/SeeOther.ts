import {Exception} from "../core/Exception";

export class SeeOther extends Exception {
  name: string = "SEE_OTHER";

  constructor(message: string) {
    super(303, message);
  }
}
