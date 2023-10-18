import express from "express";
import { IsAuthenticated, authorizeRoles } from "../middleware/auth";
import { createLayout } from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  IsAuthenticated,
  authorizeRoles("admin"),
  createLayout
);

export default layoutRouter;
