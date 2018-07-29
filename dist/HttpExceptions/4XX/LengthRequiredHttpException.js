"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server refuses to accept the request without a defined Content-Length.
 */
class LengthRequiredHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(411, message);
    }
}
exports.LengthRequiredHttpException = LengthRequiredHttpException;
