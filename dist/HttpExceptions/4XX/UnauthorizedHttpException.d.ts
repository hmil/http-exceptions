import { HttpException } from '../HttpException';
/**
 * The request has not been applied because it lacks valid authentication credentials for the target resource.
 */
export declare class UnauthorizedHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
