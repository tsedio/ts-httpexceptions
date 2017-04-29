/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 415;

export class RequestedRangeUnsatisfiable extends Exception {

    name: string = 'REQUESTED_RANGE_UNSATISFIABLE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}