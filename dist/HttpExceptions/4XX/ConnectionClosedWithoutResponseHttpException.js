"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most
 * commonly used to deny malicious or malformed requests.
 */
class ConnectionClosedWithoutResponseHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(444, message);
    }
}
exports.ConnectionClosedWithoutResponseHttpException = ConnectionClosedWithoutResponseHttpException;
