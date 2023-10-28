"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchAsyncError = void 0;
// catch async error
const CatchAsyncError = (thefunciton) => (req, res, next) => {
    Promise.resolve(thefunciton(req, res, next)).catch(next);
};
exports.CatchAsyncError = CatchAsyncError;
