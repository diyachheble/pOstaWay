import express from "express";
import { loginUser, registerUser ,getAll } from "../Users/user.controller.js";

const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

userRouter.get('/',getAll);


export default userRouter;
