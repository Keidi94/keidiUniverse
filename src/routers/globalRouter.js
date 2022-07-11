import express from "express";
import homePage from "../controllers/globalController";
import { join, login } from "../controllers/userController";
import { search } from "../controllers/companyController";

const globalRouter = express.Router();
globalRouter.get("/", homePage);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
