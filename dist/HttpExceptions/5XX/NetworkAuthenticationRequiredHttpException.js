"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The client needs to authenticate to gain network access.
 */
class NetworkAuthenticationRequiredHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(511, message);
    }
}
exports.NetworkAuthenticationRequiredHttpException = NetworkAuthenticationRequiredHttpException;
