import {Exception} from "../core/Exception";

export class RequestedRangeUnsatisfiable extends Exception {
  name: string = "REQUESTED_RANGE_UNSATISFIABLE";

  constructor(message: string) {
    super(416, message);
  }
}
