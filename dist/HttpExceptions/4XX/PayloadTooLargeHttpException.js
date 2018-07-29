"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server is refusing to process a request because the request payload is larger than the server is willing or able
 * to process.
 */
class PayloadTooLargeHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(413, message);
    }
}
exports.PayloadTooLargeHttpException = PayloadTooLargeHttpException;
