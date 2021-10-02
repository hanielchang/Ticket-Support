const { isloggedIn } = require('../helpers/auth');
const { Ticket } = require('../Models');
const router = require('express').Router();

router.get('/:id', isloggedIn, (req, res) => {
    // const id = req.params.id;
   res.render('edit');
});

module.exports = router;