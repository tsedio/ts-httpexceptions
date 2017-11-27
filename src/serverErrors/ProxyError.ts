/**
 * @module serverErrors
 */
/** */
import {Exception} from "../core/Exception";

export class ProxyError extends Exception {

    name: string = "PROXY_ERROR";

    constructor(message: string) {
        super(502, message);
    }
}