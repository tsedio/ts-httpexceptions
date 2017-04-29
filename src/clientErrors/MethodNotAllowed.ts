/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 405;

export class MethodNotAllowed extends Exception {

    name: string = 'METHOD_NOT_ALLOWED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}