
import {Exception} from './exception';
const CODE = 504;

export class GatewayTimeout extends Exception{

    name:string = 'GATEWAY_TIMEOUT';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}