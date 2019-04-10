const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create({
            title: req.body.title
        });

        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        });

        return res.json(box);
    }

    async index(req, res) {
        const boxes = await Box.find({}, '_id title')
        res.json(boxes)
    }
}

module.exports = new BoxController();