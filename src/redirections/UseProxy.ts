/**
 * @module redirections
 */
/** */
import {Exception} from "../core/Exception";

export class UseProxy extends Exception {

    name: string = "USE_PROXY";

    constructor(message: string) {
        super(305, message);
    }
}