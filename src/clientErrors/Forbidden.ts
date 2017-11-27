/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class Forbidden extends Exception {

    name: string = "FORBIDDEN";

    constructor(message: string) {
        super(403, message);
    }
}