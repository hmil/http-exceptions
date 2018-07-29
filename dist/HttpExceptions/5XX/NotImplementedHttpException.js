"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server does not support the functionality required to fulfill the request.
 */
class NotImplementedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(501, message);
    }
}
exports.NotImplementedHttpException = NotImplementedHttpException;
