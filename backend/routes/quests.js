const router = require("express").Router();
const Quest = require("../models/Quest");
const User = require("../models/User");

router.get("/", async (req, res) => {
  res.json(await Quest.find());
});

router.post("/complete/:userId/:questId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  const quest = await Quest.findById(req.params.questId);

  user.xp += quest.xp;
  if (user.xp >= 100) {
    user.level += 1;
    user.xp = 0;
  }
  await user.save();
  res.json(user);
});

module.exports = router;
