const successMessage = (res, result, message, status) => {
    return res.status(status).json({
        message:message,
        result: result
    });
};
 module.exports = successMessage;