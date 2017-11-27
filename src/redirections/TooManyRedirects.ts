/**
 * @module redirections
 */
/** */
import {Exception} from "../core/Exception";

export class TooManyRedirects extends Exception {

    name: string = "TOO_MANY_REDIRECTS";

    constructor(message: string) {
        super(310, message);
    }
}