const joi = require("joi");
const APIError = require("../utils/errors");

class recordValidation {
    constructor(req, res, next) { }

    static addrecord = async (req, res, next) => {
        try {
            await joi.object({
                fullname: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "İsim Alanı Metin Olmalıdır",
                    "string.min": "İsim Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "İsim Alanı 100 karakterden küçük olmalıdır",
                    "string.empty": "İsim Alanı Boş Bırakılamaz",
                    "string.required": "İsim Alanı Zorunludur"
                }),
                job: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "Meslek Alanı Metin Olmalıdır",
                    "string.min": "Meslek Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Meslek Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "Meslek Alanı Boş Bırakılamaz",
                    "string.required": "Meslek Alanı Zorunludur"
                }),
                email: joi.string().trim().email().messages({
                    "string.base": "E-posta Alanı Metin Olmalıdır",
                    "string.email": "Lütfen Geçerli Bir E-posta Adresi Girin",
                    "string.empty": "E-posta Alanı Boş Bırakılamaz",
                    "string.required": "E-posta Alanı Zorunludur"
                }),
                department: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "Departman Alanı Metin Olmalıdır",
                    "string.min": "Departman Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Departman Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "Departman Alanı Boş Bırakılamaz",
                    "string.required": "Departman Alanı Zorunludur"
                }),
                taxoffice: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "Vergi Dairesi Alanı Metin Olmalıdır",
                    "string.min": "Vergi Dairesi Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Vergi Dairesi Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "Vergi Dairesi Alanı Boş Bırakılamaz",
                    "string.required": "Vergi Dairesi Alanı Zorunludur"
                }),
                taxnumber: joi.string().trim().min(10).max(10).required().messages({
                    "string.base": "Vergi Numarası Alanı Metin Olmalıdır",
                    "string.min": "Vergi Numarası Alanı 10 karakter olmalıdır",
                    "string.max": "Vergi Numarası Alanı 10 karakter olmalıdır",
                    "string.empty": "Vergi Numarası Alanı Boş Bırakılamaz",
                    "string.required": "Vergi Numarası Alanı Zorunludur"
                }),
                curator: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "Vergi Sorumlusu Alanı Metin Olmalıdır",
                    "string.min": "Vergi Sorumlusu Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Vergi Sorumlusu Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "Vergi Sorumlusu Alanı Boş Bırakılamaz",
                    "string.required": "Vergi Sorumlusu Alanı Zorunludur"
                }),
                curatorphone: joi.string().trim().min(10).max(10).required().messages({
                    "string.base": "Vergi Sorumlusu Telefon Alanı Metin Olmalıdır",
                    "string.min": "Vergi Sorumlusu Telefon Alanı 10 karakter olmalıdır",
                    "string.max": "Vergi Sorumlusu Telefon Alanı 10 karakter olmalıdır",
                    "string.empty": "Vergi Sorumlusu Telefon Alanı Boş Bırakılamaz",
                    "string.required": "Vergi Sorumlusu Telefon Alanı Zorunludur"
                }),
                status: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "Durum Alanı Metin Olmalıdır",
                    "string.min": "Durum Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Durum Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "Durum Alanı Boş Bırakılamaz",
                    "string.required": "Durum Alanı Zorunludur"
                }),
                balance_count: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "balance Count Alanı Metin Olmalıdır",
                    "string.min": "balance Count Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "balance Count Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "balance Count Alanı Boş Bırakılamaz",
                    "string.required": "balance Count Alanı Zorunludur"
                }),
                balance_type: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "Balance Type Alanı Metin Olmalıdır",
                    "string.min": "Balance Type Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "Balance Type Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "Balance Type Alanı Boş Bırakılamaz",
                    "string.required": "Balance Type Alanı Zorunludur"
                }),
                balance_try: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "balance try Alanı Metin Olmalıdır",
                    "string.min": "balance try Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "balance try Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "balance try Alanı Boş Bırakılamaz",
                    "string.required": "balance try Alanı Zorunludur"
                }),
                balance_usd: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "balance usd Alanı Metin Olmalıdır",
                    "string.min": "balance usd Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "balance usd Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "balance usd Alanı Boş Bırakılamaz",
                    "string.required": "balance usd Alanı Zorunludur"
                }),
                balance_euro: joi.string().trim().min(3).max(50).required().messages({
                    "string.base": "balance euro Alanı Metin Olmalıdır",
                    "string.min": "balance euro Alanı 3 karakterden büyük olmalıdır",
                    "string.max": "balance euro Alanı 50 karakterden küçük olmalıdır",
                    "string.empty": "balance euro Alanı Boş Bırakılamaz",
                    "string.required": "balance euro Alanı Zorunludur"
                }),


            }).validateAsync(req.body)
        } catch (error) {
            throw new APIError(error.details[0].message, 401)
        }
        next();
    }

}

module.exports = recordValidation