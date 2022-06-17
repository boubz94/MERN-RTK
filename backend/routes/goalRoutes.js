const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

/* A shorthand for the following: 
// router.get("/", getGoals);
// router.post("/", setGoal);
*/
router.route("/").get(getGoals).post(setGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);
 
module.exports = router;
