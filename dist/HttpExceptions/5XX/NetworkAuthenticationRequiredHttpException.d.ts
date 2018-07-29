import { HttpException } from '../HttpException';
/**
 * The client needs to authenticate to gain network access.
 */
export declare class NetworkAuthenticationRequiredHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
