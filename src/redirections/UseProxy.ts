/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";

export class UseProxy extends Exception {

    name: string = 'USE_PROXY';

    constructor(message: string) {
        super(305, message);
    }
}