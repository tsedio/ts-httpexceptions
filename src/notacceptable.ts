import {Exception} from './exception';
const CODE = 406;

export class NotAcceptable extends Exception{

    name:string = 'NOT_ACCEPTABLE';
    status:number = CODE;

    constructor(message: string){
        super(CODE, "You must accept content-type " + message);
    }
}