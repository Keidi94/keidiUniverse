import express from "express";
import {
  see,
  editUser,
  removeUser,
  logout,
} from "../controllers/userController";
const userRouter = express.Router();
userRouter.get("/:id", see);
userRouter.get("/edit", editUser);
userRouter.get("/delete", removeUser);
userRouter.get("logout", logout);

export default userRouter;
