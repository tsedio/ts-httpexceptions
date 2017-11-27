/**
 * @module serverErrors
 */
/** */
import {Exception} from "../Exception";

export class NotExtended extends Exception {

    name: string = "NOT_EXTENDED";

    constructor(message: string) {
        super(510, message);
    }
}