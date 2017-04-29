/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 429;

export class TooManyRequests extends Exception {

    name: string = 'TOO_MANY_REQUESTS';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}