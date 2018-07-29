import { HttpException } from '../HttpException';
/**
 * Reserved for future use.
 */
export declare class PaymentRequiredHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
