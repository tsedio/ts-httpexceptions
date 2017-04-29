/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 502;

export class ProxyError extends Exception {

    name: string = 'PROXY_ERROR';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}