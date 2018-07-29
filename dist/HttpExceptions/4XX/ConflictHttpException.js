"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../HttpException");
/**
 * The request could not be completed due to a conflict with the current state of the target resource. This code is used
 * in situations where the user might be able to resolve the conflict and resubmit the request.
 */
class ConflictHttpException extends HttpException_1.HttpException {
    /**
     * @param {String} message The error message
     */
    constructor(message = '') {
        super(409, message);
    }
}
exports.ConflictHttpException = ConflictHttpException;
