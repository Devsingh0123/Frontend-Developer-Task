import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { createTask, updateTask } from "../redux/taskSlice/taskSlice";

const TaskForm = ({ editableTask = null, onClose }) => {
  const dispatch = useDispatch();
  const {tasks, loading, error } = useSelector(state => state.tasks);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false
  });

  // If editing, populate form
  useEffect(() => {
    if (editableTask) {
      setFormData({
        title: editableTask.title,
        description: editableTask.description,
        completed: editableTask.completed,
      });
    }

    if (error) {
        toast.error(error);
      }
  }, [editableTask,error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value,completed: e.target.value === "true",});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableTask) {
      dispatch(updateTask({ id: editableTask._id, updates: formData }));
      toast.success("Task updated successfully ✅");
      onClose(); 
    } else {
      dispatch(createTask(formData));
       toast.success("Task added successfully 🎉");
      setFormData({ title: "", description: "", completed: false });
    }
  };





  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow mb-4 "
    >
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <select
        name="completed"
        value={formData.completed}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="false">Pending</option>
        <option value="true">Completed</option>
      </select>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
     
        <button
        type="submit"
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-semibold transition"
      >
        {editableTask ? "Update Task" : loading ? "Adding..." : "Add Task"}
  

      </button>
          
      {editableTask && (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
