/**
 * @module clientErrors
 */
/** */
import {Exception} from "../Exception";

export class PaymentRequired extends Exception {

    name: string = "PAYMENT_REQUIRED";

    constructor(message: string) {
        super(402, message);
    }
}