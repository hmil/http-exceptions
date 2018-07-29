"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A generic HTTP exception
 */
class HttpException extends Error {
    /**
     * @param {Number} statusCode The http response status code
     * @param {String} message    The message of the exception
     */
    constructor(statusCode, message = '') {
        super(message);
        this.statusCode = statusCode;
    }
    /**
     * @returns {Number} The http response status code
     */
    getStatusCode() {
        return this.statusCode;
    }
    /**
     * @param {Number} statusCode The http response status code
     */
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }
    /**
     * @returns {String} The http response message
     */
    getMessage() {
        return this.message;
    }
    /**
     * @param {String} message The http response message
     */
    setMessage(message) {
        this.message = message;
    }
}
exports.HttpException = HttpException;
