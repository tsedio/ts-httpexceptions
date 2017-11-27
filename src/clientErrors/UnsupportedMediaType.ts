/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class UnsupportedMediaType extends Exception {

    name: string = "UNSUPPORTED_MEDIA_TYPE";

    constructor(message: string) {
        super(415, message);
    }
}