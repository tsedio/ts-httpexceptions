/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class Gone extends Exception {

    name: string = "GONE";

    constructor(message: string) {
        super(410, message);
    }
}