function applyExtraSetup(sequelize) {
  const { list, note, user } = sequelize.models;

  list.hasMany(note);
  note.belongsTo(list);

  user.sync({ alter: true });
  list.sync({ alter: true });
  note.sync({ alter: true });
}

module.exports = { applyExtraSetup };
