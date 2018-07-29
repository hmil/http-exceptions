"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades
 * to a different protocol.
 */
class UpgradeRequiredHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(426, message);
    }
}
exports.UpgradeRequiredHttpException = UpgradeRequiredHttpException;
