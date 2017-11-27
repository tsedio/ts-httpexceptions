/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class Unauthorized extends Exception {

    name: string = "UNAUTHORIZED";

    constructor(message: string) {
        super(401, message);
    }
}