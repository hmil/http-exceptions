"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing
 * the request.
 */
class ClientClosedRequestHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(499, message);
    }
}
exports.ClientClosedRequestHttpException = ClientClosedRequestHttpException;
