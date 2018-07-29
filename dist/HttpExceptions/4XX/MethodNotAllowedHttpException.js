"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The method received in the request-line is known by the origin server but not supported by the target resource.
 */
class MethodNotAllowedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(405, message);
    }
}
exports.MethodNotAllowedHttpException = MethodNotAllowedHttpException;
