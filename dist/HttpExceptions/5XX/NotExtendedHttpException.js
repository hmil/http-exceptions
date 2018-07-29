"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The policy for accessing the resource has not been met in the request. The server should send back all the information
 * necessary for the client to issue an extended request.
 */
class NotExtendedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(510, message);
    }
}
exports.NotExtendedHttpException = NotExtendedHttpException;
