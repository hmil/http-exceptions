"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
 */
class ExpectationFailedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(417, message);
    }
}
exports.ExpectationFailedHttpException = ExpectationFailedHttpException;
