/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 501;

export class NotImplemented extends Exception {

    name: string = 'NOT_IMPLEMENTED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}