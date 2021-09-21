const router = require('express').Router();
const api = require('./api');
const loginRoute = require('./login');
const homepageRoute = require('./homepage');

router.use('/api', api);
router.use('/login', loginRoute);
router.use('/', homepageRoute);

module.exports = router;