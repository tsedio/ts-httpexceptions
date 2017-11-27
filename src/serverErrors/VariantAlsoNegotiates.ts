/**
 * @module serverErrors
 */
/** */
import {Exception} from "../core/Exception";

export class VariantAlsoNegotiates extends Exception {

    name: string = "VARIANT_ALSO_NEGOTIATES";

    constructor(message: string) {
        super(506, message);
    }
}