const users = []

const bcrypt = require('bcrypt');
const passport = require('passport');

const router = require('express').Router();

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}),(req, res) => {
    res.render('homepage', user)
});

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