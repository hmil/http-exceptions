"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server is refusing to service the request because the request-target is longer than the server is willing to interpret.
 */
class RequestUriTooLongHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(414, message);
    }
}
exports.RequestUriTooLongHttpException = RequestUriTooLongHttpException;
