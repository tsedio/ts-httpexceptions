/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 511;

export class NetworkAuthenticationRequired extends Exception {

    name: string = 'NETWORK_AUTHENTICATION_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}