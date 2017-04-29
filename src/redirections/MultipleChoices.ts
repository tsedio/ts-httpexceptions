/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 300;

export class MultipleChoices extends Exception {

    name: string = 'MULTIPLE_CHOICES';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}