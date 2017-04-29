/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 414;

export class RequestURITooLong extends Exception {

    name: string = 'REQUEST_ENTITY_TOO_LARGE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}