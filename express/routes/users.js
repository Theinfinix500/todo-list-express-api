const router = require('express').Router();
const User = require('../../sequelize/models/User');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json({ user: newUser });
  } catch (error) {
    console.log(error);
  }
});

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
