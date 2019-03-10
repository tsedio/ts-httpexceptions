import {Exception} from "../core/Exception";

export class GatewayTimeout extends Exception {
  name: string = "GATEWAY_TIMEOUT";

  constructor(message: string) {
    super(504, message);
  }
}
