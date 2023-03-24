const whiteList = ["http://localhost:3000"]

const corsOptions = (req, callback) => {
    let corsOptions;

    if (whiteList.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }
    }
    else {
        corsOptions = { origin: false }
        console.log("Cors İsteği Engelledi.");
    }

    callback(null, corsOptions)
}

module.exports = corsOptions