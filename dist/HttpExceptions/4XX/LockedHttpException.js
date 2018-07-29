"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The source or destination resource of a method is locked.
 */
class LockedHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(423, message);
    }
}
exports.LockedHttpException = LockedHttpException;
