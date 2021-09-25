const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const ticketRoutes = require('./ticket-routes.js');

router.use('/users', userRoutes);
router.use('/ticket', ticketRoutes);

module.exports = router;