import { NextFunction, Request, Response } from "express";

// catch async error
export const CatchAsyncError =
  (thefunciton: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(thefunciton(req, res, next)).catch(next);
  };
