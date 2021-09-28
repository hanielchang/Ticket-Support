const seedUsers = require('./Users');
const seedTickets = require('./Tickets');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTickets();
  console.log('\n----- TICKETS SEEDED -----\n');

  process.exit(0);
};

seedAll();
