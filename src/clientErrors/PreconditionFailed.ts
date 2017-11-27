/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class PreconditionFailed extends Exception {

    name: string = "PRECONDITION_FAILED";

    constructor(message: string) {
        super(412, message);
    }
}