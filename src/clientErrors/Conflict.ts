/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class Conflict extends Exception {

    name: string = "CONFLICT";

    constructor(message: string) {
        super(409, message);
    }
}