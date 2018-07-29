"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
 */
class GatewayTimeoutHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(504, message);
    }
}
exports.GatewayTimeoutHttpException = GatewayTimeoutHttpException;
