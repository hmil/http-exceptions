"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The target resource does not have a current representation that would be acceptable to the user agent, according to
 * the proactive negotiation header fields received in the request, and the server is unwilling to supply a default
 * representation.
 */
class NotAcceptableHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(406, message);
    }
}
exports.NotAcceptableHttpException = NotAcceptableHttpException;
