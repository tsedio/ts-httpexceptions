/**
 * @module ts-httpexceptions
 */

/** */

/**
 * Class error definition
 */
export declare class Error {
    public name: string;
    public message: string;
    public stack: string;

    constructor(message?: string);

    static captureStackTrace(error: Error, constructorOpt: any): any;
}

/**
 * Refined class as Exception
 */
export class Exception implements Error {
    /**
     * Exception base name
     * @type {string}
     */
    public name: string = "HttpException";
    /**
     * Message of the exception
     */
    public message: string;
    /**
     * Exception type
     * @type {string}
     */
    public type: string = "HTTP_EXCEPTION";
    /**
     * Stack calling
     */
    public stack: string;
    public innerException: Error;
    /**
     * HTTP Code Status
     */
    public status: number;

    /**
     *
     * @param status
     * @param message
     * @param innerException
     */
    constructor(status: any, message?: string, innerException?: any) {

        Error.apply(this, arguments);

        if (typeof Error.captureStackTrace === "function") {
            //noinspection JSUnresolvedFunction
            Error.captureStackTrace(this, (<any>this).contructor);
        }

        this.status = status;
        this.message = message || "";

        if (innerException) {
            if (innerException instanceof Error) {
                this.innerException = <Error> innerException;
                this.message = this.message + ", innerException: " + this.innerException.message;
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

        this.message = (this.message + " ").trim();
    }

    toString() {
        // console.warn(this.type + ": " + this.status + " " + this.name  + " => " + this.message)
        return (this.name + "(" + this.status + "): " + this.message + " ").trim();
    }

}