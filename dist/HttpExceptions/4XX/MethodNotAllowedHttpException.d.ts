import { HttpException } from '../HttpException';
/**
 * The method received in the request-line is known by the origin server but not supported by the target resource.
 */
export declare class MethodNotAllowedHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
