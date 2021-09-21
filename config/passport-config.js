const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByUsername, getUsetById) {
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        if (user == null) {
            return done(null, false, { message: 'Username or Password is incorrect' });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Username or Password is incorrect' })
            }
        } catch (err) {
            return done(err);
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'passwword' }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => done(null, getUsetById(id)))
}

module.exports = initialize;