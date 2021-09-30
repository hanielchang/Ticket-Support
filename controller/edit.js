const { isloggedIn } = require('../helpers/auth');
const router = require('express').Router();

router.get('/:id', isloggedIn, (req, res) => {
    Ticket.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        console.log(dbUserData);
        res.render('edit');
    }).catch(err => {
        res.status(500).json(err);
    });
    res.render('edit', );
});

module.exports = router;