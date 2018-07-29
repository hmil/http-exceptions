"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The method could not be performed on the resource because the requested action depended on another action and that action
 * failed.
 */
class FailedDependencyHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(424, message);
    }
}
exports.FailedDependencyHttpException = FailedDependencyHttpException;
