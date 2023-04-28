const joi = require("joi");
const APIError = require("../utils/errors");

class companyValidation {
    constructor(req, res, next) { }

    static addrecord = async (req, res, next) => {
        try {
            await joi.object({
                companyId: joi.string().trim().required().messages({
                    "string.base": "companyId Alanı Metin Olmalıdır",
                    "string.min": "companyId Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "companyId Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "companyId Alanı Boş Bırakılamaz",
                    "string.required": "companyId Alanı Zorunludur"
                }),
                name: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "İsim Alanı Metin Olmalıdır",
                    "string.min": "İsim Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "İsim Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "İsim Alanı Boş Bırakılamaz",
                    "string.required": "İsim Alanı Zorunludur"
                }),
                phone: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Telefon Alanı Metin Olmalıdır",
                    "string.min": "Telefon Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Telefon Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "Telefon Alanı Boş Bırakılamaz",
                    "string.required": "Telefon Alanı Zorunludur"
                }),
                address: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "adres Alanı Metin Olmalıdır",
                    "string.min": "adres Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "adres Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "adres Alanı Boş Bırakılamaz",
                    "string.required": "adres Alanı Zorunludur"
                }),
                clients: joi.array().items(joi.string().trim().min(3).max(100).required()).messages({
                    "string.base": "clients Alanı Metin Olmalıdır",
                    "string.min": "clients Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "clients Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "clients Alanı Boş Bırakılamaz",
                    "string.required": "clients Alanı Zorunludur"
                }),
                wallets: joi.array().items(joi.string().trim().min(3).max(100).required()).messages({
                    "string.base": "wallets Alanı Metin Olmalıdır",
                    "string.min": "wallets Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "wallets Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "wallets Alanı Boş Bırakılamaz",
                    "string.required": "wallets Alanı Zorunludur"
                }),
                taxNumber: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "taxNumber Alanı Metin Olmalıdır",
                    "string.min": "taxNumber Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "taxNumber Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "taxNumber Alanı Boş Bırakılamaz",
                    "string.required": "taxNumber Alanı Zorunludur"
                }),
                taxOffice: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "taxOffice Alanı Metin Olmalıdır",
                    "string.min": "taxOffice Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "taxOffice Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "taxOffice Alanı Boş Bırakılamaz",
                    "string.required": "taxOffice Alanı Zorunludur"
                }),
                taxAddress: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "taxAddress Alanı Metin Olmalıdır",
                    "string.min": "taxAddress Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "taxAddress Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "taxAddress Alanı Boş Bırakılamaz",
                    "string.required": "taxAddress Alanı Zorunludur"
                }),
                owners: Joi.array().items(Joi.string()),
                employees: Joi.array().items(Joi.string()),
                users: Joi.array().items(Joi.string()),
                transactions: Joi.array().items(Joi.string()),
                
            }).validateAsync(req.body)
        } catch (error) {
            throw new APIError(error.details[0].message, 401)
        }
        next();
    }

}

module.exports = companyValidation