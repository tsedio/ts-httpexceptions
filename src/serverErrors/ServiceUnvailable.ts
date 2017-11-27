/**
 * @module serverErrors
 */
/** */
import {Exception} from "../Exception";

export class ServiceUnvailable extends Exception {

    name: string = "SERVICE_UNVAILABLE";

    constructor(message: string) {
        super(503, message);
    }
}