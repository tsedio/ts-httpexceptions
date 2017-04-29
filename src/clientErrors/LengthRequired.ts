/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 411;

export class LengthRequired extends Exception {

    name: string = 'LENGTH_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}