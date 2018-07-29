"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The origin server is refusing to service the request because the payload is in a format not supported by this method on the
 * target resource.
 */
class UnsupportedMediaTypeHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(415, message);
    }
}
exports.UnsupportedMediaTypeHttpException = UnsupportedMediaTypeHttpException;
