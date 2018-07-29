"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server did not receive a complete request message within the time that it was prepared to wait.
 */
class RequestTimeoutHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(408, message);
    }
}
exports.RequestTimeoutHttpException = RequestTimeoutHttpException;
