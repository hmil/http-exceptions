"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The origin server requires the request to be conditional.
 */
class PreconditionRequiredHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(428, message);
    }
}
exports.PreconditionRequiredHttpException = PreconditionRequiredHttpException;
