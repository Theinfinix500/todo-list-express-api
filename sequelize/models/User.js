const { DataTypes } = require('sequelize');

const User = (module.exports = (sequelize) => {
  sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
});
