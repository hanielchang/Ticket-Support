const { Ticket } = require('../models');

const TicketData = [
  {
    title: "Sample Ticket",
    category: 'Software',
    content: 'This is a sample ticket',
    status: 'pending',
    UserId: '1'
  },
  {
    title: "Sample Ticket2",
    category: 'Hardware',
    content: 'This is a sample ticket2',
    status: 'pending',
    UserId: '1'
  },
  {
    title: "Sample Ticket3",
    category: 'Credentials',
    content: 'This is a sample ticket3',
    status: 'pending',
    UserId: '2'
  },
  {
    title: "Sample Ticket4",
    category: 'Credentials',
    content: 'This is a sample ticket4',
    status: 'pending',
    UserId: '3'
  },
  {
    title: "Sample Ticket5",
    category: 'Credentials',
    content: 'This is a sample ticket5',
    status: 'pending',
    UserId: '3'
  },
  {
    title: "Sample Ticket6",
    category: 'Credentials',
    content: 'This is a sample ticket6',
    status: 'pending',
    UserId: '4'
  },
  {
    title: "Sample Ticket7",
    category: 'Credentials',
    content: 'This is a sample ticket7',
    status: 'pending',
    UserId: '5'
  },
  {
    title: "Sample Ticket8",
    category: 'Credentials',
    content: 'This is a sample ticket8',
    status: 'pending',
    UserId: '1'
  },
  {
    title: "Sample Ticket9",
    category: 'Credentials',
    content: 'This is a sample ticket9',
    status: 'pending',
    UserId: '3'
  },
  
];

const seedTicket = () => Ticket.bulkCreate(TicketData);

module.exports = seedTicket;
