import { HttpException } from '../HttpException';
/**
 * The server understood the request but refuses to authorize it.
 */
export declare class ForbiddenHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
