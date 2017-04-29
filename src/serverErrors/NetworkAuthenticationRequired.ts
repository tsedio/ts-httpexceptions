/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";

export class NetworkAuthenticationRequired extends Exception {

    name: string = 'NETWORK_AUTHENTICATION_REQUIRED';

    constructor(message: string) {
        super(511, message);
    }
}