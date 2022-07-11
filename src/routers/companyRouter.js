import express from "express";
import {
  search,
  universe,
  data,
  chart,
  rim,
  upload,
  editData,
} from "../controllers/companyController";
const companyRouter = express.Router();

companyRouter.get("/search", search);
companyRouter.get("/upload", upload);
companyRouter.get("/universe", universe);
companyRouter.get("/:id/edit", editData);
companyRouter.get("/:id/data", data);
companyRouter.get("/:id/chart", chart);
companyRouter.get("/:id/rim", rim);

export default companyRouter;
