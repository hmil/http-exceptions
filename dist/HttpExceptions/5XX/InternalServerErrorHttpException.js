"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
class InternalServerErrorHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(500, message);
    }
}
exports.InternalServerErrorHttpException = InternalServerErrorHttpException;
