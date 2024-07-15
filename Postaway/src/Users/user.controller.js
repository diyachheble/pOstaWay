import UserModel from './user.model.js';
import jwt from "jsonwebtoken";

export const registerUser = (req, res, next) => {
        const userData = req.body;
        if (userData) {
            let user = UserModel.addUser(userData);
            res.status(201).json({ status: "success", user });
          } else {
            res.status(400).json({ status: "failure", msg: "invalid user details" });
          }
    };

    export const loginUser = (req, res) => {
        let status = UserModel.confirmLogin(req.body);
        if (status) {
            const token = jwt.sign(
                { userId: status.id, userEmail: status.email },
                "CodingNinjas2016",
                { expiresIn: "1h" }
              );
              res
                .status(201)
                .cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })
                .json({ status: "success", msg: "login successfull", token });
          } else {
            res.status(400).json({ status: "failure", msg: "invalid user details" });
          }
    };

    export const getAll = (req, res) => {
        const users = UserModel.getAllUsers();
        res.status(200).json({ status: "success", users });
      };
      
