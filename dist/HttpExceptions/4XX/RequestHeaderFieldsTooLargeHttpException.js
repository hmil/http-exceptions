"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after
 * reducing the size of the request header fields.
 */
class RequestHeaderFieldsTooLargeHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(431, message);
    }
}
exports.RequestHeaderFieldsTooLargeHttpException = RequestHeaderFieldsTooLargeHttpException;
