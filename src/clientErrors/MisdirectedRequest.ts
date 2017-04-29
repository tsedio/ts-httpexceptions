/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 421;

export class MisdirectedRequest extends Exception {

    name: string = 'MISDIRECTED_REQUEST';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}