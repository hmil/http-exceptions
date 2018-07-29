import { HttpException } from '../HttpException';
/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
export declare class InternalServerErrorHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
