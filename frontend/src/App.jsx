import React from "react";
import { useEffect } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
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
      <Toaster position="top-center" reverseOrder={false} />
      {/* <BrowserRouter> */}
      <HashRouter>
        <AppRoutes />
      </HashRouter>
      {/* </BrowserRouter></> */}
    </>
  );
}

export default App;
