/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";

export class LengthRequired extends Exception {

    name: string = 'LENGTH_REQUIRED';

    constructor(message: string) {
        super(411, message);
    }
}