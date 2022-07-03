import express from "express";
import { universe, data, chart, rim } from "../controllers/companyController";
const companyRouter = express.Router();

companyRouter.get("/universe", universe);
companyRouter.get("/data", data);
companyRouter.get("/chart", chart);
companyRouter.get("/rim", rim);

export default companyRouter;
