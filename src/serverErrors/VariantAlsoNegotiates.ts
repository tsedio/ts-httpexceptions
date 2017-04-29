/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 506;

export class VariantAlsoNegotiates extends Exception {

    name: string = 'VARIANT_ALSO_NEGOTIATES';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}