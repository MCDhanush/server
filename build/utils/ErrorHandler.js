"use strict";
// in error handler we use OOP for use multiple times as input of single time of code exection
// and we only change our arugument and parameter.
Object.defineProperty(exports, "__esModule", { value: true });
// the super() method is used to call the constructor of the parent class. (-↓ continue )
// it passes the message arugument to the error class constructor which sets the error message fot the instance.
// step-7
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ErrorHandler;
