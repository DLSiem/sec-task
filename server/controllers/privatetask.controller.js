const PrivateTask = require("../models/privatetask.model");

// create a new task
exports.create = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.params.userId;
    const task = new PrivateTask({
      title,
      userId: userId,
    });
    await task.save();
    return res.json({ message: "Task created", task });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error creating task" });
  }
};

// get all tasks
exports.getAll = async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await PrivateTask.find({ userId: userId });
    return res.json({ tasks });
  } catch (error) {
    console.log(error);
  }
};
