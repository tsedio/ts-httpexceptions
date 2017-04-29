/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 428;

export class PreconditionRequired extends Exception {

    name: string = 'PRECONDITION_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}