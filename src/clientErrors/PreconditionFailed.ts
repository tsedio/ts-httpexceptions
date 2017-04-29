/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 412;

export class PreconditionFailed extends Exception {

    name: string = 'PRECONDITION_FAILED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}