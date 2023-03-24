const { response } = require("express");

class Response {

    constructor(data = null, message = null, status) {
        this.data = data;
        this.message = message;
        this.status = status;
    }

    success(res) {
        return res.status(200).json({
            status: 'success',
            message: this.message ?? 'Successfully',
            data: this.data
        });
    }

    created(res) {
        return res.status(201).json({
            status: 'success',
            message: this.message ?? 'Successfully',
            data: this.data
        });
    }

    error400(res) {
        return res.status(400).json({
            status: 'failed',
            message: this.message ?? 'Failed!',
            data: this.data
        });
    }

    error401(res) {
        return res.status(401).json({
            status: 'failed',
            message: this.message ?? 'Please Make Register!',
            data: this.data
        });
    }

    error404(res) {
        return res.status(400).json({
            status: 'failed',
            message: this.message ?? 'Failed!',
            data: this.data
        });
    }

    error429(res) {
        return res.status(400).json({
            status: 'failed',
            message: this.message ?? 'So Much Request!',
            data: this.data
        });
    }

    error500(res) {
        return res.status(500).json({
            status: 'failed',
            message: this.message ?? 'Failed!',
            data: this.data
        });
    }

}

module.exports = Response;