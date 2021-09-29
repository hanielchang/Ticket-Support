const { isloggedIn } = require('../helpers/auth');
const router = require('express').Router();

router.get('/', isloggedIn,(req, res) => {
    res.render('submit');
});

module.exports = router;