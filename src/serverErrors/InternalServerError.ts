/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";

const CODE = 500;

export class InternalServerError extends Exception {

    name: string = 'INTERNAL_SERVER_ERROR';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}