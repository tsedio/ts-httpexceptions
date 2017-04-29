/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";

export class GatewayTimeout extends Exception {

    name: string = 'GATEWAY_TIMEOUT';

    constructor(message: string) {
        super(504, message);
    }
}