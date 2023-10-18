import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal servor error";

  // mongodb id error
  if (err.name === "CasteError") {
    const messgae = `Resource not found. Invalis :${err.path}`;
    err = new ErrorHandler(messgae, 400);
  }

  //   if error occur on 11000 it means duplicate key
  if (err.name === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }
  // if error occurs on  json token invalid
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid,try again`;
    err = new ErrorHandler(message, 400);
  }
  // // if error occurs on  json token expired
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired ,try again`;
    err = new ErrorHandler(message, 400);
  }
  // other error
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
