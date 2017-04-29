/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 301;

export class MovedPermanently extends Exception {

    name: string = 'MOVED_PERMANENTLY';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}