"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The origin server did not find a current representation for the target resource or is not willing to disclose that
 * one exists.
 */
class NotFoundHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(404, message);
    }
}
exports.NotFoundHttpException = NotFoundHttpException;
