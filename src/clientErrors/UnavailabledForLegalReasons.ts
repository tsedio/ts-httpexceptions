/**
 * @module clientErrors
 */
/** */
import {Exception} from "../Exception";

export class UnavailabledForLegalReasons extends Exception {

    name: string = "UNAVAILABLED_FOR_LEGAL_REASONS";

    constructor(message: string) {
        super(451, message);
    }
}