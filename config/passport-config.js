const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../Models/User');

const authenticateUser = async (username, password, done) => {

    const user = await (await User.findOne({ where: { username: username } }));

    if (user == null) {
        console.log('no user');
        return done(null, false, { message: 'Username or Password is incorrect' });
    }
    try {
        if (await bcrypt.compareSync(password, user.password)) {
            console.log('correct password');
            return done(null, user);
        } else {
            console.log('wrong password');
            return done(null, false, { message: 'Username or Password is incorrect' });
        }
    } catch (err) {
        return done(err);
    }
}


passport.use(new LocalStrategy(authenticateUser));
passport.serializeUser((user, done) => {
    done(null, user.id)
});
passport.deserializeUser(function (id, done) {
    User.findOne({ where: { id: id } }).then(user => {
        done(null, user);
    }).catch(err => {
        done(err, null);
    });
});