"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * One or more conditions given in the request header fields evaluated to false when tested on the server.
 */
class PreconditionFailedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(412, message);
    }
}
exports.PreconditionFailedHttpException = PreconditionFailedHttpException;
