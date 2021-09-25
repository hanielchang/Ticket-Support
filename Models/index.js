const User = require('./User');
const Ticket = require('./Ticket');

Ticket.belongsTo(User);
User.hasMany(Ticket);

module.exports = {User, Ticket};