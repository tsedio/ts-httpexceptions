/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class RequestHeaderFieldsTooLarge extends Exception {

    name: string = "REQUEST_HEADER_FIELDS_TOO_LARGE";

    constructor(message: string) {
        super(431, message);
    }
}