import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser()).unwrap();
    navigate("/login");
    toast.success("Logout successfully ✅");
  };

  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-bold">
        TaskManager
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>

        <Link to="/profile" className="hover:underline">
          Profile
        </Link>

        <span className="text-sm hidden md:block">Hi, {user?.name}</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
