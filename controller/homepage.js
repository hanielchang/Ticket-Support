const { User } = require('../Models');

const router = require('express').Router();

router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: req.session.passport.user
        },
        attributes: ['username']
    }).then(dbData => {
        res.render('homepage', dbData.dataValues);
    }).catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;