/**
 * @module clientErrors
 */
/** */
import {Exception} from "../core/Exception";

export class UnprocessableEntity extends Exception {

    name: string = "UNPROCESSABLE_ENTITY";

    constructor(message: string) {
        super(422, message);
    }
}