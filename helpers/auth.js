const passport = require('passport');

module.exports = {
    isloggedIn: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    },

    isLoggedOut: function(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/homepage');
    }
}