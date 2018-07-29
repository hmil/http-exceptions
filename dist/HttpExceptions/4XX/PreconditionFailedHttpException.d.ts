import { HttpException } from '../HttpException';
/**
 * One or more conditions given in the request header fields evaluated to false when tested on the server.
 */
export declare class PreconditionFailedHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
