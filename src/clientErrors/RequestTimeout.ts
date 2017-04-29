/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 408;

export class RequestTimeout extends Exception {

    name: string = 'REQUEST_TIMEOUT';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}