/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 415;

export class UnsupportedMediaType extends Exception {

    name: string = 'UNSUPPORTED_MEDIA_TYPE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}