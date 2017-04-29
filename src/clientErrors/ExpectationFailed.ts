/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 417;

export class ExpectationFailed extends Exception {

    name: string = 'EXPECTATION_FAILED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}