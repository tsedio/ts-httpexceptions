/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 307;

export class TemporaryRedirect extends Exception {

    name: string = 'TEMPORARY_REDIRECT';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}