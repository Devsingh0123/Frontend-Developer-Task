
import React from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./redux/authSlice/authSlice";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
  <Toaster position="top-right" reverseOrder={false} />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter></>
  );
}

export default App;
