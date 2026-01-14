import Task from "../models/Task.schema.js";

// Create Task
export const createTask = async (req, res) => {
  const { title, description,completed  } = req.body;

  const userId = req.user
  console.log(userId);
  

  if (!title) return res.status(400).json({ message: "Title is required" });

  const task = await Task.create({ user:userId, title, description, completed: completed ?? false});
  res.status(201).json(task);
};

// Get All Tasks for user
export const getAllTasks = async (req, res) => {
     const userId = req.user
  console.log(userId);
  const tasks = await Task.find({ user: userId });
  res.json(tasks);
};

// Update Task
export const updateTask = async (req, res) => {
   const userId = req.user
  console.log(userId);

  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: userId },
    { $set: req.body },
    { new: true }
  );
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

// Delete Task
export const deleteTask = async (req, res) => {
       const userId = req.user
  console.log(userId);
  const task = await Task.findOneAndDelete({ _id: req.params.id, user:userId });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Task deleted successfully" });
};


// delete all tasks of loggedIn user
export const deleteAllTasks = async (req, res) => {
  const userId = req.user; 
  console.log(userId);
  

  const result = await Task.deleteMany({ user: userId });

  res.json({
    message: "All tasks deleted successfully",
    deletedCount: result.deletedCount,
  });
};
