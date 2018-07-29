"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.
 */
class ProxyAuthenticationRequiredHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(407, message);
    }
}
exports.ProxyAuthenticationRequiredHttpException = ProxyAuthenticationRequiredHttpException;
