import { HttpException } from '../HttpException';
/**
 * The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
 */
export declare class ExpectationFailedHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
