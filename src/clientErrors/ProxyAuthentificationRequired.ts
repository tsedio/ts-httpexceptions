/**
 * @module redirection
 */ /** */
import {Exception} from "../Exception";
const CODE = 407;

export class ProxyAuthentificationRequired extends Exception {

    name: string = 'PROXY_AUTHENTIFICATION_REQUIRED';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}