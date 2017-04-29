/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 413;

export class RequestEntityTooLarge extends Exception {

    name: string = 'REQUEST_ENTITY_TOO_LARGE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}