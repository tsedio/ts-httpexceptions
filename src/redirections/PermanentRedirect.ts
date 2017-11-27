/**
 * @module redirections
 */
/** */
import {Exception} from "../Exception";

export class PermanentRedirect extends Exception {

    name: string = "PERMANENT_REDIRECT";

    constructor(message: string) {
        super(308, message);
    }
}