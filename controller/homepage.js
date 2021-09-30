const { User, Ticket } = require('../Models');
const { isloggedIn } = require('../helpers/auth');
const router = require('express').Router();

router.get('/', isloggedIn, (req, res) => {
    User.findOne({
        where: {
            id: req.session.passport.user
        },
        include: [
            {
                model: Ticket,
                attributes: [
                    'id',
                    'title',
                    'category',
                    'content',
                    'status',
                    'created_at'
                ]
            }
        ]
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        const tickets = dbUserData.dataValues.Tickets.map(ticket => ticket.get({ plain: true }));
        console.log(tickets);
        res.render('homepage', { user: dbUserData.dataValues, tickets: tickets });
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;