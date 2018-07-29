"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server is denying access to the resource as a consequence of a legal demand.
 */
class UnavailableForLegalReasonsHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(451, message);
    }
}
exports.UnavailableForLegalReasonsHttpException = UnavailableForLegalReasonsHttpException;
