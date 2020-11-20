const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err }

    error.message = err.message;
    // Log to console for dev

    console.log(err);

    // Mongoose bad ObjectID
    if (err.name === 'CastError') {
        const message = `Bootcamp not found with id of ${error.value}`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate Key
    if (err.code === 11000) {
        const message = `Duplicate field value entered}`;
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });

}
module.exports = errorHandler;