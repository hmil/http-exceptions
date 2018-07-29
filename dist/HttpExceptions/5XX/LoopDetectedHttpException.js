"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server terminated an operation because it encountered an infinite loop while processing a request with
 * "Depth: infinity". This status indicates that the entire operation failed.
 */
class LoopDetectedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(508, message);
    }
}
exports.LoopDetectedHttpException = LoopDetectedHttpException;
