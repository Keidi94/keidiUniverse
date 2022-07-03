import express from "express";
import { editUser, removeUser } from "../controllers/userController";
const userRouter = express.Router();
userRouter.get("/edit", editUser);
userRouter.get("/delete", removeUser);

export default userRouter;
