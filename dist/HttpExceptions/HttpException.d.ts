/**
 * A generic HTTP exception
 */
export declare class HttpException extends Error {
    statusCode: number;
    /**
     * @param {Number} statusCode The http response status code
     * @param {String} message    The message of the exception
     */
    constructor(statusCode: number, message?: string);
    /**
     * @returns {Number} The http response status code
     */
    getStatusCode(): number;
    /**
     * @param {Number} statusCode The http response status code
     */
    setStatusCode(statusCode: number): void;
    /**
     * @returns {String} The http response message
     */
    getMessage(): string;
    /**
     * @param {String} message The http response message
     */
    setMessage(message: string): void;
}
