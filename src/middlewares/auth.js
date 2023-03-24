const jwt = require("jsonwebtoken")

const createToken = async (user, res) => {

    const payload = {
        sub: user._id,
        name: user.name,
        email: user.email
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
        algorithm: process.env.JWT_ALGORITHM
    })

    return res.status(201).json({
        status: "success",
        token: token,
        message: "Token Oluşturuldu."
    })
}

module.exports = {
    createToken
}