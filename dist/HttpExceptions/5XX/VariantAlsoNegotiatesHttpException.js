"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent
 * content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
class VariantAlsoNegotiatesHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(506, message);
    }
}
exports.VariantAlsoNegotiatesHttpException = VariantAlsoNegotiatesHttpException;
