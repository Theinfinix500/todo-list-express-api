const sequelize = require('./sequelize');
const app = require('./app');
const PORT = 8080;

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection`);
  try {
    await sequelize.authenticate();
    console.log('Database connection OK!');
  } catch (error) {
    console.log('Unable to connect to database:');
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();
  console.log(`Starting app on port ${PORT}`);
  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}.`);
  });
}

init();
