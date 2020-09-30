const { User } = require('../models/user.model');

module.exports = {
    index: (req, res) => {
        User.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true,
        })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
};
