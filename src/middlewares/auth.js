const jwt = require("jsonwebtoken")
const APIError = require("../utils/errors")
const User = require("../models/user.model")


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
        message: "Giriş Başarılı Token Oluşturuldu."
    })
    
}

const tokenCheck = async (req, res, next) => {

    const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ")
    if (!headerToken) throw new APIError("Geçersiz Oturum. Lütfen Tekrar Oturum Açın", 401)
    const token = req.headers.authorization.split(" ")[1]

    await jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) throw new APIError("Geçersiz Token", 401)
        const userTemp = await User.findById(decoded.sub).select("_id name lastname email role company")
        if (!userTemp) throw new APIError("Geçersiz Kullanıcı", 401)
        req.user = userTemp
    })

    next()
}

module.exports = {
    createToken,
    tokenCheck
}
