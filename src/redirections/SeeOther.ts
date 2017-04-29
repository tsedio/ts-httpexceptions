/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 303;

export class SeeOther extends Exception {

    name: string = 'SEE_OTHER';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}