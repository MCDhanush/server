"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("../controllers/user.controllers");
const auth_1 = require("../middleware/auth");
// import { getAllUsers } from "../controllers/course.controller";
const userRouter = express_1.default.Router();
// for sending mail to routes will helps to connect
userRouter.post("/registration", user_controllers_1.registrationUser);
userRouter.post("/activate-user", user_controllers_1.activateUser);
userRouter.post("/login", user_controllers_1.loginUser);
userRouter.get("/logout", auth_1.IsAuthenticated, user_controllers_1.logoutUser);
// userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", auth_1.IsAuthenticated, user_controllers_1.getUserInfo);
userRouter.post("/social-auth", user_controllers_1.socialAuth);
userRouter.put("/update-user-info", auth_1.IsAuthenticated, user_controllers_1.updateUserInfo);
userRouter.put("/update-user-passsword", auth_1.IsAuthenticated, user_controllers_1.updatePassword);
userRouter.put("/update-user-avatar", auth_1.IsAuthenticated, user_controllers_1.updateProfilePicture);
userRouter.get("/get-users", auth_1.IsAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controllers_1.getAllUsers);
userRouter.put("/update-user", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), user_controllers_1.updateUserRole);
userRouter.delete("/delete-user/:id", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), user_controllers_1.deleteUser);
exports.default = userRouter;
