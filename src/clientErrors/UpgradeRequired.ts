/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 426;

export class UpgradeRequired extends Exception {

    name: string = 'UPGRADE_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}