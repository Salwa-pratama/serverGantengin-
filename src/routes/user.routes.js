import express from "express";
import {
  getUsers,
  addUser,
  userLogin,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/regist", addUser);
router.post("/login", userLogin);
export default router;
