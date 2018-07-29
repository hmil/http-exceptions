"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server understood the request but refuses to authorize it.
 */
class ForbiddenHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(403, message);
    }
}
exports.ForbiddenHttpException = ForbiddenHttpException;
