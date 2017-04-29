/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 409;

export class Conflict extends Exception {

    name: string = 'CONFLICT';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}