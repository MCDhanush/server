import express from "express";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAdminAllCourses,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { IsAuthenticated, authorizeRoles } from "../middleware/auth";
// import { updateAccessToken } from "../controllers/user.controllers";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse, editCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get(
  "/get-course-content/:id",
  IsAuthenticated,
  // updateAccessToken,
  getCourseByUser
);

courseRouter.put(
  "/add-question",
  IsAuthenticated,
  // updateAccessToken,
  addQuestion
);

courseRouter.put("/add-answer", IsAuthenticated, addAnswer);

courseRouter.put(
  "/add-review/:id",
  IsAuthenticated,
  // updateAccessToken,
  addReview
);

courseRouter.put(
  "/add-reply",
  IsAuthenticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.get(
  "/get-courses",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  getAllCourses
);

courseRouter.get(
  "/getAdminAllCourses",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  getAdminAllCourses
);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);

courseRouter.delete(
  "/delete-course/:id",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  deleteCourse
);

export default courseRouter;
