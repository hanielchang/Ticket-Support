const { User } = require('../Models');
const { isloggedIn } = require('../helpers/auth');
const router = require('express').Router();

router.get('/', isloggedIn, (req, res) => {
    res.render('homepage');
});

module.exports = router;