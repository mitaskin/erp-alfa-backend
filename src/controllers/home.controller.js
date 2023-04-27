const APIError = require("../utils/errors");
const Response = require("../utils/response");

const home = async (req, res) => {


    const dataMenu = {
        "total_balance": 10000,
        "total_lira": 200,
        "total_usd": 200,
        "total_btc": 200,
        "total_eur": 200
    };
    return new Response(dataMenu, "Home Verileri").created(res)

}


module.exports = {
    home
}