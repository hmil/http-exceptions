"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The method could not be performed on the resource because the server is unable to store the representation needed
 * to successfully complete the request.
 */
class InsufficientStorageHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(507, message);
    }
}
exports.InsufficientStorageHttpException = InsufficientStorageHttpException;
