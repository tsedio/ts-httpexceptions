import {Exception} from "../core/Exception";

export class UpgradeRequired extends Exception {
  name: string = "UPGRADE_REQUIRED";

  constructor(message: string) {
    super(426, message);
  }
}
