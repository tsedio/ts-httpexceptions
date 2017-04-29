/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 451;

export class UnavailabledForLegalReasons extends Exception {

    name: string = 'UNAVAILABLE_FOR_LEGAL_REASONS';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}