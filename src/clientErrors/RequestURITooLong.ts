/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 414;

export class RequestURITooLong extends Exception {

    name: string = 'REQUEST_URI_TOO_LONG';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}