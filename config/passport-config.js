const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');

// function initialize(passport, getUserByUsername, getUsetById) {
const authenticateUser = async (username, password, done) => {
    
    /* const user = */
    

    const user = {
        id: 0,
        username: 'Mazive_Velocity',
        email: 'cayman.g@hotmail.com',
        password: 'password'
    };

    if (user == null) {
        console.log('no user');
        return done(null, false, { message: 'Username or Password is incorrect' });
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            console.log('password is correct');
            console.log(user);
            return done(null, user);
        } else {
            console.log('wrong password');
            return done(null, false, { message: 'Username or Password is incorrect' });
        }
    } catch (err) {
        console.log('error');
        return done(err);
    }
}

passport.use(new LocalStrategy(authenticateUser));
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, getUsetById(id)));