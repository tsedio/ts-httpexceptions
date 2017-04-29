/**
 * @module serverErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 509;

export class BandwidthLimitExceeded extends Exception {

    name: string = 'BANDWIDTH_LIMIT_EXCEEDED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}