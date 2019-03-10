import {Exception} from "../core/Exception";

export class InternalServerError extends Exception {
  name: string = "INTERNAL_SERVER_ERROR";

  constructor(message: string) {
    super(500, message);
  }
}
