const errorMessage = (res, err, message, status) => {
    return res.status(status).json({
        error: {
            message: message,
            error: err,
            status: status
        }
    });
};

module.exports = errorMessage;