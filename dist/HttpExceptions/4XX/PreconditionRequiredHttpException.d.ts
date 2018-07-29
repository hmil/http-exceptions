import { HttpException } from '../HttpException';
/**
 * The origin server requires the request to be conditional.
 */
export declare class PreconditionRequiredHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
