"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_1 = require("./middleware/error");
const user_route_1 = __importDefault(require("./routes/user.route"));
const course_route_1 = __importDefault(require("./routes/course.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const notificatioin_route_1 = __importDefault(require("./routes/notificatioin.route"));
const layout_route_1 = __importDefault(require("./routes/layout.route"));
const express_rate_limit_1 = require("express-rate-limit");
// api requetds limit
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
});
// body parser step1
exports.app.use(express_1.default.json({ limit: "50mb" }));
//cookie parser (when sending data from front-end it will use)-s2
exports.app.use((0, cookie_parser_1.default)());
// cors =>cross origin resource sharing-s3
exports.app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
// routes
exports.app.use("/api/v1", user_route_1.default);
exports.app.use("/api/v1", course_route_1.default);
exports.app.use("/api/v1", order_route_1.default);
exports.app.use("/api/v1", notificatioin_route_1.default);
exports.app.use("/api/v1", layout_route_1.default);
// testing api-s4
exports.app.get("/test", (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "API Is Working",
    });
});
// unKnown Route (access to unknown page)-s5(after connecting to our web page then connect database) s5
exports.app.all("*", (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    next(err);
});
// Apply the rate limiting middleware to all requests.
exports.app.use(limiter);
exports.app.use(error_1.ErrorMiddleware);
