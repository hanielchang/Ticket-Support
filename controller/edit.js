const { isloggedIn } = require('../helpers/auth');
const router = require('express').Router();

router.get('/:id', isloggedIn, async (req, res) => {
    const id = await req.params.id;
    res.render('edit', {id});
});

module.exports = router;