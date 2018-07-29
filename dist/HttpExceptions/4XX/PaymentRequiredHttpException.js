"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * Reserved for future use.
 */
class PaymentRequiredHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(402, message);
    }
}
exports.PaymentRequiredHttpException = PaymentRequiredHttpException;
