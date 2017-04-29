/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 510;

export class BandwidthLimitExceeded extends Exception {

    name: string = 'NOT_EXTENDED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}