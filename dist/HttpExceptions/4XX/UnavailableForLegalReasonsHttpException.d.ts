import { HttpException } from '../HttpException';
/**
 * The server is denying access to the resource as a consequence of a legal demand.
 */
export declare class UnavailableForLegalReasonsHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
