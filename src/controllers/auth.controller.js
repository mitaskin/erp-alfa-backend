const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");

const login = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}

const register = async (req, res) => {

    const userCheck = await User.findOne({ email: req.body.email });
    if (userCheck) throw new APIError('That user already exisits!', 401)

    req.body.password = await bcrypt.hash(req.body.password, 10);

    userTemp = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        company: req.body.company
    });

    await userTemp.save()
        .then((data) => {
            return new Response(data, "Kayıt Başarıyla Eklendi").created(res);
        })
        .catch((err) => {
            throw new APIError('Kullanıcı Kayıt Edilemedi!', 400)
        })
}

module.exports = {
    login,
    register
}