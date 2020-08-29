const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'list',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
};
