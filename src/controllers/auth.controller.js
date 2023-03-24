const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");

const login = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}

const register = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);

        const userCheck = await User.findOne({ email: req.body.email });
        if (userCheck) {
            throw new APIError('That user already exisits!',401)
        } else {
            // Insert the new user if they do not exist yet
            userTemp = new User({
                name: req.body.name,
                lastname:req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                company:req.body.company
            });
            await userTemp.save();
            res.send(userTemp);
        }


}


module.exports = {
    login,
    register
}