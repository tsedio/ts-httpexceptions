
import {Exception} from './exception';
const CODE = 400;

export class BadRequest extends Exception{

    name:string = 'BAD_REQUEST';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}