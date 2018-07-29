import { HttpException } from '../HttpException';
/**
 * The origin server did not find a current representation for the target resource or is not willing to disclose that
 * one exists.
 */
export declare class NotFoundHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
