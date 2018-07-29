import { HttpException } from '../HttpException';
/**
 * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after
 * reducing the size of the request header fields.
 */
export declare class RequestHeaderFieldsTooLargeHttpException extends HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message?: string);
}
