const {Type} = require('../models/models')
const apiError = require('../error/apiError')

class typeController {
    async post(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new typeController()