import express from "express";
import MessageModel from "../Modules/Message";
import UserModel from "../Modules/User";

export const resetRouter = express.Router();

resetRouter.get("/all", (req, res) => {
    UserModel.find({}).remove();
    MessageModel.find({}).remove();
    res.send("done");
});

