// in error handler we use OOP for use multiple times as input of single time of code exection
// and we only change our arugument and parameter.

// the super() method is used to call the constructor of the parent class. (-↓ continue )
// it passes the message arugument to the error class constructor which sets the error message fot the instance.

// step-7

class ErrorHandler extends Error {
  statusCode: Number;

  constructor(message: any, statusCode: Number) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
