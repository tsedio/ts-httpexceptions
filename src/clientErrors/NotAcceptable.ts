import {Exception} from "../core/Exception";

export class NotAcceptable extends Exception {
  name: string = "NOT_ACCEPTABLE";

  constructor(message: string) {
    super(406, "You must accept content-type " + message);
  }
}
