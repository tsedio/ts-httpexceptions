/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 310;

export class TooManyRedirects extends Exception {

    name: string = 'TOO_MANY_REDIRECTS';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}