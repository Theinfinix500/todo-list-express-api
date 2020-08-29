const router = require('express').Router();
const Note = require('../../sequelize/models/Note');

router.post('/', async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    res.json({ note: newNote });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
