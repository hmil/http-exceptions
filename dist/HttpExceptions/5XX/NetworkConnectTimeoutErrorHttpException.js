"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind
 * the proxy to a client in front of the proxy.
 */
class NetworkConnectTimeoutErrorHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(599, message);
    }
}
exports.NetworkConnectTimeoutErrorHttpException = NetworkConnectTimeoutErrorHttpException;
