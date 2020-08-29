const express = require('express');

//Routes
const noteRoutes = require('./routes/notes');
const listRoutes = require('./routes/lists');
const userRoutes = require('./routes/users');

const app = express();

//MiddleWares
app.use(express.json());
app.use('/note', noteRoutes);
app.use('/list', listRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

module.exports = app;
