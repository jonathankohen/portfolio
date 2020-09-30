const Musician = require('../models/musician.models'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt');

module.exports = {
    index: (req, res) => {
        Musician.find()
            .then(data => res.json({ results: data }))
            .catch(err => console.log(err.errors));
    },

    // create: (req, res) => {
    //     Musician.create(req.body, { withCredentials: true })
    //         .then(data => res.json({ results: data }))
    //         .catch(err => console.log(err));
    // },

    // display_one: (req, res) => {
    //     Musician.findOne({ _id: req.params.id }, { withCredentials: true })
    //         .then(data => res.json({ results: data }))
    //         .catch(err => console.log(err));
    // },

    // update: (req, res) => {
    //     Musician.findOneAndUpdate({ _id: req.params.id }, req.body, {
    //         withCredentials: true,
    //         useFindAndModify: false,
    //         runValidators: true,
    //         new: true,
    //     })
    //         .then(data => res.json({ results: data }))
    //         .catch(err => res.json(err.errors));
    // },

    // destroy: (req, res) => {
    //     Musician.deleteOne({ _id: req.params.id }, { withCredentials: true })
    //         .then(data => res.json({ results: data }))
    //         .catch(err => res.json(err.errors));
    // },
};
