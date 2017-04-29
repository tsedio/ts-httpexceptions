/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";

export class RequestTimeout extends Exception {

    name: string = 'REQUEST_TIMEOUT';

    constructor(message: string) {
        super(408, message);
    }
}