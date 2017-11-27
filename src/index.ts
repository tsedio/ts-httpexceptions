/**
 * @module ts-httpexceptions
 * @preferred
 */
/** */

export * from "./clientErrors";
export * from "./redirections";
export * from "./serverErrors";

import {Exception} from "./Exception";

export {
    Exception,
    Exception as HTTPException
};