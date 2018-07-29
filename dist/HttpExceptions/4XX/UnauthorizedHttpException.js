"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The request has not been applied because it lacks valid authentication credentials for the target resource.
 */
class UnauthorizedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(401, message);
    }
}
exports.UnauthorizedHttpException = UnauthorizedHttpException;
