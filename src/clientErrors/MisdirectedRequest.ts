/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class MisdirectedRequest extends Exception {

    name: string = "MISDIRECTED_REQUEST";

    constructor(message: string) {
        super(421, message);
    }
}