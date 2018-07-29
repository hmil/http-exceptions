import { HttpException } from '../HttpException';
/**
 * The server does not support the functionality required to fulfill the request.
 */
export declare class NotImplementedHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
