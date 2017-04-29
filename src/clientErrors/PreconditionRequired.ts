/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 428;

export class PreconditionRequired extends Exception {

    name: string = 'PRECONDITION_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}