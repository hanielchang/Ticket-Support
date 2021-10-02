const router = require('express').Router();
const { isLoggedOut } = require('../helpers/auth');

router.get('/', isLoggedOut,(req, res) => {
    console.log(req.session);
    res.render('login', req.session.flash);
});

module.exports = router;