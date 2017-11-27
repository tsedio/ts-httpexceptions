/**
 * @module clientErrors
 */
/** */
import {Exception} from "../Exception";

export class RequestURITooLong extends Exception {

    name: string = "REQUEST_URI_TOO_LONG";

    constructor(message: string) {
        super(414, message);
    }
}