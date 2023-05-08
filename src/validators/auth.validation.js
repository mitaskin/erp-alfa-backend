const joi = require("joi");
const APIError = require("../utils/errors");

class authValidation {
    constructor(req, res, next) { }

    static register = async (req, res, next) => {
        try {
            await joi.object({
                name: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "İsim Alanı Metin Olmalıdır",
                    "string.min": "İsim Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "İsim Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "İsim Alanı Boş Bırakılamaz",
                    "string.required": "İsim Alanı Zorunludur"
                }),
                surname: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Soyisim Alanı Metin Olmalıdır",
                    "string.min": "Soyisim Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Soyisim Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "Soyisim Alanı Boş Bırakılamaz",
                    "string.required": "Soyisim Alanı Zorunludur"
                }),
                email: joi.string().trim().email().required().messages({
                    "string.base": "E-posta Adresi Geçersiz",
                    "string.required": "E-posta Adresi Zorunludur",
                    "string.email": "Lütfen E-posta Adresi Giriniz",
                }),
                password: joi.string().trim().min(5).max(36).required().messages({
                    "string.base": "Şifre Geçersiz",
                    "string.min": "Şifre 5 karakterden büyük olmalıdır",
                    "string.max": "Şifre 36 karakterden küçük olmalıdır",
                    "string.empty": "Şifre Boş Bırakılamaz",
                    "string.required": "Şifre Zorunludur"
                }),
                role: joi.string().trim().min(3).max(100).messages({
                    "string.base": "Rol Alanı Metin Olmalıdır",
                    "string.min": "Rol Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Rol Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "Rol Alanı Boş Bırakılamaz",
                    "string.required": "Rol Alanı Zorunludur"
                }),
                company: joi.string().trim().min(3).max(100).messages({
                    "string.base": "Şirket Alanı Metin Olmalıdır",
                    "string.min": "Şirket Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Şirket Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "Şirket Alanı Boş Bırakılamaz",
                    "string.required": "Şirket Alanı Zorunludur"
                }),
                address: joi.string().trim().min(3).max(100).messages({
                    "string.base": "adres Alanı Metin Olmalıdır",
                    "string.min": "adres Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "adres Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "adres Alanı Boş Bırakılamaz",
                    "string.required": "adres Alanı Zorunludur"
                }),
                phone: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Telefon Alanı Metin Olmalıdır",
                    "string.min": "Telefon Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Telefon Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "Telefon Alanı Boş Bırakılamaz",
                    "string.required": "Telefon Alanı Zorunludur"
                }),
            }).validateAsync(req.body)
        } catch (error) {
            throw new APIError(error.details[0].message, 400)
        }
        next();
    }

    static login = async (req, res, next) => {
        try {
            await joi.object({
                email: joi.string().trim().email().required().messages({
                    "string.base": "E-posta Adresi Geçersiz",
                    "string.required": "E-posta Adresi Zorunludur",
                    "string.email": "Lütfen E-posta Adresi Giriniz",
                }),
                password: joi.string().trim().min(5).max(36).required().messages({
                    "string.base": "Şifre Geçersiz",
                    "string.min": "Şifre 5 karakterden büyük olmalıdır",
                    "string.max": "Şifre 36 karakterden küçük olmalıdır",
                    "string.empty": "Şifre Boş Bırakılamaz",
                    "string.required": "Şifre Zorunludur"
                })
            }).validateAsync(req.body)

        } catch (error) {
            throw new APIError(error.details[0].message, 400)
        }
        next();
    }

}

module.exports = authValidation