"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while
 * attempting to fulfill the request.
 */
class BadGatewayHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(502, message);
    }
}
exports.BadGatewayHttpException = BadGatewayHttpException;
