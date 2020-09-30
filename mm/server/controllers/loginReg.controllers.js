const { Musician } = require('../models/musician.models'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        Musician.create(req.body, { withCredentials: true })
            .then(musician =>
                res
                    .cookie(
                        'musiciantoken',
                        jwt.sign({ id: musician._id }, process.env.JWT_KEY),
                        {
                            httpOnly: true,
                        },
                    )
                    .json({
                        msg: 'success',
                        musician: {
                            firstName: musician.firstName,
                            lastName: musician.lastName,
                        },
                    }),
            )
            .catch(err => res.status(400).json(err.errors));
    },

    login: (req, res) => {
        Musician.findOne({ email: req.body.email })
            .then(musician => {
                if (musician == null) {
                    res.status(400).json({ msg: 'Invalid login attempt!' });
                    res.cookie();
                } else {
                    bcrypt
                        .compare(req.body.password, musician.password)
                        .then(isValid => {
                            if (isValid === true) {
                                res.cookie(
                                    'musiciantoken',
                                    jwt.sign(
                                        { _id: musician._id },
                                        process.env.JWT_KEY,
                                    ),
                                    {
                                        httpOnly: true,
                                    },
                                ).json({ msg: 'success!' });
                            } else {
                                console.log('DHFKFJDKFKDH');
                                res.status(400).json({
                                    msg: 'Invalid login attempt!',
                                });
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(400).json({
                                msg: 'Invalid login attempt!',
                            });
                        });
                }
            })
            .catch(err => res.status(400).json(err.errors));
    },
    logout: (req, res) => {
        res.clearCookie('musiciantoken');
        res.sendStatus(200);
    },
};
