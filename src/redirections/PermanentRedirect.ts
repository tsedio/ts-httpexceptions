/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 308;

export class PermanentRedirect extends Exception {

    name: string = 'PERMANENT_REDIRECT';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}