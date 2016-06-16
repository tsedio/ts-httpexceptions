import {Exception} from './exception';
const CODE = 501;

export class NotImplemented extends Exception{

    name:string = 'NOT_IMPLEMENTED';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}