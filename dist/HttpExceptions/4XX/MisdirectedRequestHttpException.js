"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The request was directed at a server that is not able to produce a response. This can be sent by a server that is not
 * configured to produce responses for the combination of scheme and authority that are included in the request URI.
 */
class MisdirectedRequestHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(421, message);
    }
}
exports.MisdirectedRequestHttpException = MisdirectedRequestHttpException;
