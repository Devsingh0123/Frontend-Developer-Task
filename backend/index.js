import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import currentUser from "./routes/currentUser.router.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

const app = express();
app.use(cors({
  origin: [
      "http://localhost:5173",
      "https://frontend-developer-task-rho.vercel.app",
      
    ],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/user", currentUser);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
