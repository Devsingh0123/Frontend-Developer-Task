import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks, getAllTasks } from "../redux/taskSlice/taskSlice";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import toast from "react-hot-toast";


const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

 // for deleting all the tasks
  const handleDeleteAll = () => {
  const confirm = window.confirm(
    "Are you sure you want to delete all tasks?"
  );
  if (confirm) {
    dispatch(deleteAllTasks());
     toast.success(" All Tasks deleted 🗑️");
  }
};

  return (
    <div className=" h-screen flex flex-col ">
      <Navbar />
      <div className="flex-1 overflow-y-auto flex justify-center  ">
        
        {/* Main content */}
        <main className="w-1/2  ">
        <div className="flex justify-between mt-2">
          <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
        {/* delete all tasks button */}
           
               {tasks && <button  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-lg font-semibold transition" onClick={handleDeleteAll}>Delete All Tasks</button>}</div>
           


          <TaskForm />
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-4 mt-4 ">
             { tasks.length === 0 ? (
              <div className="mt-20 text-center text-gray-500">
                <h2 className="text-xl font-semibold">No tasks found 😕</h2>
                <p>Add your first task to get started</p>
              </div>
              ) : (
              tasks.map((task) => (
                <TaskCard key={task._id} task={task} />
              ))
              )}
            </div>
          )}
        </main>
      </div>
    </div>

  );
};

export default Dashboard;
