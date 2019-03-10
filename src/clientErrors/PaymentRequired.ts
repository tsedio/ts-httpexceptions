import {Exception} from "../core/Exception";

export class PaymentRequired extends Exception {
  name: string = "PAYMENT_REQUIRED";

  constructor(message: string) {
    super(402, message);
  }
}
