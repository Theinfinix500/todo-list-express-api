const router = require('express').Router();
const Note = require('../models/List');

router.post('/', async (req, res) => {
  try {
    const newList = await List.create(req.body);
    res.json({ list: newList });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
