/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class RequestEntityTooLarge extends Exception {

    name: string = "REQUEST_ENTITY_TOO_LARGE";

    constructor(message: string) {
        super(413, message);
    }
}