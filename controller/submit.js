const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('submit');
});

module.exports = router;