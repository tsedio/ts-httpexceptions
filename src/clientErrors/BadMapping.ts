/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 421;
/**
 *
 */
export class BadMapping extends Exception {

    name: string = 'BAD_MAPPING';
    status: number = CODE;

    /**
     *
     * @param message
     */
    constructor(message: string) {
        super(CODE, message);
    }
}