import {Exception} from "../core/Exception";

export class BadRequest extends Exception {
  name: string = "BAD_REQUEST";

  constructor(message: string) {
    super(400, message);
  }
}
