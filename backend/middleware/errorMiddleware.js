/**
 * It takes an error object, a request object, a response object, and a next function as arguments, and
 * returns a response object with a status code and a message.
 * @param err - The error object
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you're done with your middleware.
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
