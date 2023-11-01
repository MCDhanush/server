"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("../controllers/course.controller");
const auth_1 = require("../middleware/auth");
// import { updateAccessToken } from "../controllers/user.controllers";
const courseRouter = express_1.default.Router();
courseRouter.post("/create-course", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), course_controller_1.uploadCourse);
courseRouter.put("/edit-course/:id", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), course_controller_1.editCourse);
courseRouter.get("/get-course/:id", course_controller_1.getSingleCourse, course_controller_1.editCourse);
courseRouter.get("/get-courses", course_controller_1.getAllCourses);
courseRouter.get("/get-course-content/:id", auth_1.IsAuthenticated, 
// updateAccessToken,
course_controller_1.getCourseByUser);
courseRouter.put("/add-question", auth_1.IsAuthenticated, 
// updateAccessToken,
course_controller_1.addQuestion);
courseRouter.put("/add-answer", auth_1.IsAuthenticated, course_controller_1.addAnswer);
courseRouter.put("/add-review/:id", auth_1.IsAuthenticated, 
// updateAccessToken,
course_controller_1.addReview);
courseRouter.put("/add-reply", auth_1.IsAuthenticated, (0, auth_1.authorizeRoles)("admin"), course_controller_1.addReplyToReview);
courseRouter.get("/get-courses", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), course_controller_1.getAllCourses);
courseRouter.get("/getAdminAllCourses", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), course_controller_1.getAdminAllCourses);
courseRouter.post("/getVdoCipherOTP", course_controller_1.generateVideoUrl);
courseRouter.delete("/delete-course/:id", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), course_controller_1.deleteCourse);
exports.default = courseRouter;