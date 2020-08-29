const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'note',
    {
      completed_at: {
        type: DataTypes.DATE,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      due_date: {
        type: DataTypes.DATE,
      },
    },
    {}
  );
};
