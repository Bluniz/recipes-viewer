

const ErrorHandler = (error, req, res, next) => {
    console.log("middleware")

    console.log("middleware")
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    res.status(status).json({
        success: false,
        status,
        message,
        stack: error.stack
    })
}

export default ErrorHandler