/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 418;

export class ImATeapot extends Exception {

    name: string = 'IM_A_TEAPOT';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}