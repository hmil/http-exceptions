"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * None of the ranges in the request's Range header field1 overlap the current extent of the selected resource or that the set
 * of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.
 */
class RequestedRangeNotSatisfiableHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(416, message);
    }
}
exports.RequestedRangeNotSatisfiableHttpException = RequestedRangeNotSatisfiableHttpException;
