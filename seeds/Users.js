const { User } = require('../models');

const UserData = [
  {
    username: 'Juan',
    email: 'juan@hotmail.com',
    password: '1234567',
    role: 'user',
  },
  {
    username: 'Jose',
    email: 'jose@gmail.com',
    password: '1282831',
    role: 'user',
  },
  {
    username: 'Cayman',
    email: 'caytheman@yahoo.com',
    password: '1221001',
    role: 'user',
  },
  {
    username: 'Rabin',
    email: 'Rabin@outlook.com',
    password: 'niahlie',
    role: 'admin',
  },
  {
    username: 'Haniel',
    email: 'Hanmaster@berkely.com',
    password: '020wh~!',
    role: 'admin',
  },
  
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
