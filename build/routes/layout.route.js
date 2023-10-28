"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const layout_controller_1 = require("../controllers/layout.controller");
// import { updateAccessToken } from "../controllers/user.controllers";
const layoutRouter = express_1.default.Router();
layoutRouter.post("/create-layout", auth_1.IsAuthenticated, 
// updateAccessToken,
(0, auth_1.authorizeRoles)("admin"), layout_controller_1.createLayout);
exports.default = layoutRouter;
