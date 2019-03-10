import {Exception} from "../core/Exception";

export class BandwidthLimitExceeded extends Exception {
  name: string = "BANDWIDTH_LIMIT_EXCEEDED";

  constructor(message: string) {
    super(509, message);
  }
}
