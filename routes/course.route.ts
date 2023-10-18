import express from "express";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { IsAuthenticated, authorizeRoles } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  IsAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  IsAuthenticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse, editCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get("/get-course-content/:id", IsAuthenticated, getCourseByUser);

courseRouter.put("/add-question", IsAuthenticated, addQuestion);

courseRouter.put("/add-answer", IsAuthenticated, addAnswer);

courseRouter.put("/add-review/:id", IsAuthenticated, addReview);

courseRouter.put(
  "/add-reply",
  IsAuthenticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.put(
  "/get-courses",
  IsAuthenticated,
  authorizeRoles("admin"),
  getAllCourses
);

courseRouter.delete(
  "/delete-course/:id",
  IsAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);

export default courseRouter;
