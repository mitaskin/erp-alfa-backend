const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const { createToken } = require("../middlewares/auth");

const register = async (req, res) => {

    const userCheck = await User.findOne({ email: req.body.email });
    if (userCheck) throw new APIError('Kullanıcı Sisteme Zaten Kayıtlı', 409)

    req.body.password = await bcrypt.hash(req.body.password, 10);

    userTemp = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        company: req.body.company,
        address:req.body.address,
        phone:req.body.phone
    });

    await userTemp.save()
        .then((data) => {
            return new Response(data, "Kayıt Başarıyla Eklendi").created(res);
        })
        .catch((err) => {
            throw new APIError(err, 400)
        })

}

const login = async (req, res) => {

    const { email, password } = req.body

    const userTemp = await User.findOne({ email })
    if (!userTemp) throw new APIError("Kullanıcı Bulunamadı!", 400)

    const isPassTrue = await bcrypt.compare(password, userTemp.password)
    if (!isPassTrue) throw new APIError("Şifre Yanlış", 400)

    createToken(userTemp, res);

}

const me = async (req, res) => {

    return new Response(req.user).success(res)

}

module.exports = {
    login,
    register,
    me
}