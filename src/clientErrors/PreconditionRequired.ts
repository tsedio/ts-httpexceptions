/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class PreconditionRequired extends Exception {

    name: string = "PRECONDITION_REQUIRED";

    constructor(message: string) {
        super(428, message);
    }
}