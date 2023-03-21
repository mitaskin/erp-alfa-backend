class APIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = this.statusCode || 400
    }
}

module.exports = APIError