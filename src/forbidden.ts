
import {Exception} from './exception';
const CODE = 403;

export class Forbidden extends Exception{

    name:string = 'FORBIDDEN';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}