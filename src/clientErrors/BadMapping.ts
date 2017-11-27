/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

/**
 *
 */
export class BadMapping extends Exception {

    name: string = "BAD_MAPPING";

    /**
     *
     * @param message
     */
    constructor(message: string) {
        super(421, message);
    }
}