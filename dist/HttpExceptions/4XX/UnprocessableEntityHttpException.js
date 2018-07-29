"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is
 * inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was
 * unable to process the contained instructions.
 */
class UnprocessableEntityHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(422, message);
    }
}
exports.UnprocessableEntityHttpException = UnprocessableEntityHttpException;
