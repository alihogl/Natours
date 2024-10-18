class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; //adding this property for understand the error created by this class
    Error.captureStackTrace(this, this.constructor);
  }
}

//115.v

module.exports = AppError;
