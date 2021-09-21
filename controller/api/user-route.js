const users = []

const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../../config/passport-config');
const flash = require('express-flash');

initializePassport(passport,
    function(username){ users.find(user => user.username === username)},
    id => users.find(user => user.id === id)
);

const router = require('express').Router();
router.use(passport.initialize());
router.use(passport.session());
router.use(flash())

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/test',
    failureFlash: true
}));

router.post('/register', async (req, res) => {
    const encrtpyedPW = await bcrypt.hash(req.body.password, 10)
    users.push({
        id: users.length,
        username: req.body.username,
        email: req.body.email,
        password: encrtpyedPW
    });
    res.status(200).json({ message: 'user saved' });
    console.log(users);
});

module.exports = router