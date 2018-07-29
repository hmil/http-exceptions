"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The target resource is no longer available at the origin server and that this condition is likely to be permanent.
 */
class GoneHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(410, message);
    }
}
exports.GoneHttpException = GoneHttpException;
