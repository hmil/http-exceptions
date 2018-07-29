import { HttpException } from '../HttpException';
/**
 * The server is refusing to service the request because the request-target is longer than the server is willing to interpret.
 */
export declare class RequestUriTooLongHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
