/**
 * @module redirections
 */
/** */
import {Exception} from "../core/Exception";

export class TemporaryRedirect extends Exception {

    name: string = "TEMPORARY_REDIRECT";

    constructor(message: string) {
        super(307, message);
    }
}