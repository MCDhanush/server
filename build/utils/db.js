"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
// asusual we connect monogdb in this s6
const dbUrl = process.env.DB_URL || "";
// same concept but different method on this we use try,catch s7
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(dbUrl).then((data) => {
            console.log(`Databse is connected ${data.connection.host}`);
        });
    }
    catch (error) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};
exports.default = connectDB;
