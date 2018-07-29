"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server does not support, or refuses to support, the major version of HTTP that was used in the request message.
 */
class HttpVersionNotSupportedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(505, message);
    }
}
exports.HttpVersionNotSupportedHttpException = HttpVersionNotSupportedHttpException;
