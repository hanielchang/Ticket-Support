const { isloggedIn } = require('../helpers/auth');
const { Ticket } = require('../Models');
const router = require('express').Router();

// edit doesn't work so for now will be commented out//
// router.get('/', isloggedIn, (req, res) => {
//     // const id = req.params.id;
//     res.render('edit', {id: 16});
// });

module.exports = router;