import {Exception} from "../core/Exception";

export class ExpectationFailed extends Exception {
  name: string = "EXPECTATION_FAILED";

  constructor(message: string) {
    super(417, message);
  }
}
