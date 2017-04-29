/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 304;

export class NotModified extends Exception {

    name: string = 'NOT_MODIFIED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}