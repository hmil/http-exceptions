"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
class TooManyRequestsHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(429, message);
    }
}
exports.TooManyRequestsHttpException = TooManyRequestsHttpException;
