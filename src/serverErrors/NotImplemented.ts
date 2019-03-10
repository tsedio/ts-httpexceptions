import {Exception} from "../core/Exception";

export class NotImplemented extends Exception {
  name: string = "NOT_IMPLEMENTED";

  constructor(message: string) {
    super(501, message);
  }
}
