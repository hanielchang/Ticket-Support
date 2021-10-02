const router = require('express').Router();
const api = require('./api');
const loginRoute = require('./login');
const homepageRoute = require('./homepage');
const submitRoute = require('./submit');
const editRoute = require('./edit');

router.use('/api', api);
router.use('/', loginRoute);
router.use('/submit', submitRoute);
router.use('/edit', editRoute);
router.use('/homepage', homepageRoute);

module.exports = router;