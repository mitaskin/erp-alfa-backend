const user = require("../models/user.model")
const bcrypt = require("bcrypt");
const { response } = require("express");

const login = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}

const register = async (req, res) => {
    console.log(req.body);

    const { password } = req.body

    req.body.password = await bcrypt.hash(password, 10);

    try {
        const userTemp = new user(req.body)

        await userTemp.save()
            .then((response) => {
                return res.status(201).json({
                    success: true,
                    data: response,
                    message: "Kayıt Başarıyla Eklendi"
                })
            })

    } catch (error) {
        console.log("Kayıt Başarısız.", error);
    }
}

module.exports = {
    login,
    register
}