const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../Models/User');

// function initialize(passport, getUserByUsername, getUsetById) {
const authenticateUser = async (username, password, done) => {

    /* const user = */
    const user = await User.findOne({ where: { username: username } });
    console.log(user.dataValues);

    if (user == null) {
        console.log('no user');
        return done(null, false, { message: 'Username or Password is incorrect' });
    }

    try {
        if (await bcrypt.compareSync(password, user.dataValues.password)) {
            console.log('password is correct');
            console.log(user.dataValues.password);
            return done(null, user.dataValues);
        } else {
            console.log('wrong password');
            console.log(user.dataValues.password);
            return done(null, false, { message: 'Username or Password is incorrect' });
        }
    } catch (err) {
        console.log('error');
        return done(err);
    }
}

passport.serializeUser((user, done) => done(null, user.dataValues.id));
passport.use(new LocalStrategy(authenticateUser));
passport.deserializeUser(function (id, done) {
    User.findOne({ where: { id: id } }).then((dbData, err) => {
        done(err, dbData);
    });
});