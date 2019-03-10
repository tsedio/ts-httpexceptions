import {Exception} from "../core/Exception";

export class BadGateway extends Exception {
  name: string = "BAD_GATEWAY";

  constructor(message: string) {
    super(502, message);
  }
}
