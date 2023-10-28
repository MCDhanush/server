import express from "express";
import { authorizeRoles, IsAuthenticated } from "../middleware/auth";
import {
  getNotifications,
  updateNotification,
} from "../controllers/notification.controller";
// import { updateAccessToken } from "../controllers/user.controllers";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notification",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  getNotifications
);

notificationRoute.put(
  "/update-notification/:id",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  updateNotification
);

export default notificationRoute;
