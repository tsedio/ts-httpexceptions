/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 503;

export class ServiceUnvailable extends Exception {

    name: string = 'SERVICE_UNVAILABLE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}