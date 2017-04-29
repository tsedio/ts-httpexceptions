/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 410;

export class Gone extends Exception {

    name: string = 'GONE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}