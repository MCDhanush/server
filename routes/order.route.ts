import express from "express";
import { IsAuthenticated, authorizeRoles } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
// import { updateAccessToken } from "../controllers/user.controllers";
const orderRouter = express.Router();

orderRouter.post("/create-order", IsAuthenticated, createOrder);

orderRouter.get(
  "/get-orders",
  IsAuthenticated,
  // updateAccessToken,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
