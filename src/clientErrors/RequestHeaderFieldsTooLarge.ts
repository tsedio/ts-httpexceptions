/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 431;

export class RequestHeaderFieldsTooLarge extends Exception {

    name: string = 'REQUEST_HEADER_FIELDS_TOO_LARGE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}