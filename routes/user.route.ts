import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
  updateUserInfo,
  updatePassword,
  updateProfilePicture,
  updateUserRole,
  deleteUser,
} from "../controllers/user.controllers";
import { IsAuthenticated, authorizeRoles } from "../middleware/auth";
import { getAllUsers } from "../controllers/course.controller";
const userRouter = express.Router();

// for sending mail to routes will helps to connect
userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", IsAuthenticated, logoutUser);

userRouter.get("/refresh", updateAccessToken);

userRouter.get("/me", IsAuthenticated, getUserInfo);

userRouter.post("/social-auth", socialAuth);

userRouter.put("/update-user-info", IsAuthenticated, updateUserInfo);

userRouter.put("/update-user-passsword", IsAuthenticated, updatePassword);

userRouter.put("/update-user-avatar", IsAuthenticated, updateProfilePicture);

userRouter.get(
  "/get-users",
  IsAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-user",
  IsAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  IsAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);

export default userRouter;
