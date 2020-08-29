const router = require('express').Router();
const sequelize = require('../../sequelize/index');

router.get('/', async (req, res) => {
  try {
    const lists = await sequelize.models.list.findAll();
    res.json({
      lists,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/:listId', async (req, res) => {
  const listId = req.params.listId;
  try {
    const list = await sequelize.models.list.findOne({
      where: {
        id: listId,
      },
    });
    res.json({
      list,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const newList = await sequelize.models.list.create(req.body);
    res.json({ list: newList });
  } catch (error) {
    console.log(error);
  }
});

router.put('/:listId', async (req, res) => {
  const listId = req.params.listId;
  try {
    const updatedList = await sequelize.models.list.update(
      { ...req.body },
      { where: { id: listId } }
    );
    res.json({ updatedList });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:listId', async (req, res) => {
  const listId = req.params.listId;
  try {
    const deletedList = await sequelize.models.list.destroy({
      where: { id: listId },
    });
    res.json({ deletedList });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
