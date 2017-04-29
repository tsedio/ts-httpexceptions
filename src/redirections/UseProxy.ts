/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 305;

export class UseProxy extends Exception {

    name: string = 'USE_PROXY';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}