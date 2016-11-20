export declare class Error {
    public name:string;
    public message:string;
    public stack:string;
    constructor(message?:string);
    static captureStackTrace(error: Error, constructorOpt: any);
}

export class Exception implements Error {
    public name:string = 'HttpException';
    public message:string;
    public type:string = 'HTTP_EXCEPTION';
    public stack:string;
    public innerException: Error;
    public status:number;

    constructor(status:any, message?: string, innerException?: any) {

        Error.apply(this, arguments);

        if (typeof Error.captureStackTrace === 'function') {
            //noinspection JSUnresolvedFunction
            Error.captureStackTrace(this, (<any>this).contructor);
        }

        this.status = status;
        this.message = message || '';

        if (innerException) {
            if (innerException instanceof Error) {
                this.innerException = <Error> innerException;
                this.message = this.message + ", innerException: " + this.innerException.message ;
            }
            else if (typeof innerException === "string") {
                this.innerException = new Error(innerException);
                this.message = this.message + ", innerException: " + this.innerException.message;
            }
            else {
                this.innerException = <Error> innerException;
                this.message = this.message + ", innerException: " + this.innerException;
            }
        }

        this.message = (this.message+ " ").trim();
    }

    toString(){
        //console.warn(this.type + ': ' + this.status + ' ' + this.name  + ' => ' + this.message)
        return (this.name  + '('+this.status+'): ' + this.message + " ").trim();
    }

}