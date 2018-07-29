"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
 */
class ServiceUnavailableHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(503, message);
    }
}
exports.ServiceUnavailableHttpException = ServiceUnavailableHttpException;
