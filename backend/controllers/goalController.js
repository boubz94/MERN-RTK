const asyncHandler = require("express-async-handler");

//@desc     Get goals
//@route    GET /api/goals
//@Access   Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

//@desc     set goal
//@route    POST /api/goals
//@Access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "set goal" });
});

//@desc     Update goal
//@route    PUT /api/goals/:id
//@Access   Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@Access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
