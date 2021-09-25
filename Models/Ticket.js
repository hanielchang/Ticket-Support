const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'Ticket'
    }
  );

module.exports = Ticket;