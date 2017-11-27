/**
 * @module redirections
 */
/** */
import {Exception} from "../core/Exception";

export class MovedPermanently extends Exception {

    name: string = "MOVED_PERMANENTLY";

    constructor(message: string) {
        super(301, message);
    }
}