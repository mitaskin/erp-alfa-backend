const APIError = require("../utils/errors")

const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof APIError) {
        
        return res.status(error.statusCode || 400)
            .json({
                status: "error",
                message: error.message
            })
    }

    console.log(error);

    return res.status(500).json({
        status: "error",
        message: "Bilinmemyen Bir hata ile karşılaştık lütfen sistem yöneticisine haber verin!"
    })
}

module.exports = errorHandlerMiddleware