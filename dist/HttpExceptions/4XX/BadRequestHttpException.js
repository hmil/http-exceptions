"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server cannot or will not process the request due to something that is perceived to be a client error
 * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
class BadRequestHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(400, message);
    }
}
exports.BadRequestHttpException = BadRequestHttpException;
