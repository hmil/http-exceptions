import { HttpException } from '../HttpException';
/**
 * Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.
 */
export declare class ProxyAuthenticationRequiredHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
