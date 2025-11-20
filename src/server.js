import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", userRoutes);


export default app;
