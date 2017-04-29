/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 402;

export class PaymentRequired extends Exception {

    name: string = 'PAYMENT_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}