import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice/taskSlice";
import TaskForm from "./TaskForm";
import toast from "react-hot-toast";


const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  console.log(task);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task._id));
       toast.success("Task deleted 🗑️");
    }else{
      toast.error("Failed to delete task ❌");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow relative ">
      {isEditing ? (
        <TaskForm editableTask={task} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-1 truncate">{task.title}</h3>
          <p className="text-gray-600 mb-1  truncate">{task.description}</p>
          <span
            className={`inline-block px-2 py-1 rounded text-sm ${
              task.completed
                ? "bg-green-400 text-green-800"
                : "bg-yellow-400 text-yellow-800"
            }`}
          >
            {task.completed ? "completed" : "pending"}
          </span>

          <div className="absolute top-2 right-2 flex gap-2 ">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
