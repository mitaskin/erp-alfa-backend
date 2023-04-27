const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const { createToken } = require("../middlewares/auth");
const Record = require("../models/record.model");

const addRecord = async (req, res) => {

    recordTemp = new Record({req});

    await recordTemp.save()
        .then((data) => {
            return new Response(data, "Kayıt Başarıyla Eklendi").created(res);
        })
        .catch((err) => {
            throw new APIError('Kayıt Başarısız!' && err, 400)
        })

}



module.exports = {
    addRecord,
}