import express from "express";
import { IsAuthenticated, authorizeRoles } from "../middleware/auth";
import { createLayout } from "../controllers/layout.controller";
// import { updateAccessToken } from "../controllers/user.controllers";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  createLayout
);

export default layoutRouter;
