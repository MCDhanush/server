import express, { NextFunction, Request, Response } from "express";
export const app = express();
require("dotenv").config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notificatioin.route";
import layoutRouter from "./routes/layout.route";
import { rateLimit } from "express-rate-limit";

// api requetds limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

// body parser step1
app.use(express.json({ limit: "50mb" }));

//cookie parser (when sending data from front-end it will use)-s2
app.use(cookieParser());

// cors =>cross origin resource sharing-s3
app.use(
  cors({
    origin: ["https://resplendent-faloodeh-66ed07.netlify.app"],
    credentials: true,
  })
);

// routes
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRoute);
app.use("/api/v1", layoutRouter);

// testing api-s4
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API Is Working",
  });
});

// unKnown Route (access to unknown page)-s5(after connecting to our web page then connect database) s5
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  next(err);
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);

app.use(ErrorMiddleware);
