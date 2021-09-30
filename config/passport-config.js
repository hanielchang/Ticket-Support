const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../Models/User');

const authenticateUser = async (username, password, done) => {
    
    User.findOne({
        where: {
            username: username
        }
    }).then(async user => {
        if(!user){
            console.log('no user');
            return done(null, false, { message: 'Username or Password is incorrect' });
        }else if(!await bcrypt.compareSync(password, user.password)){
            console.log('incorrect password');
            return done(null, false, { message: 'Username or Password is incorrect' });
        }
        return done(null, user);
    }).catch(err => {
        return done(err)
    });
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