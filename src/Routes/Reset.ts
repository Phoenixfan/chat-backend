import express from "express";
import MessageModel from "../Modules/Message";
import UserModel from "../Modules/User";

export const resetRouter = express.Router();

resetRouter.get("/all", async (req, res) => {
    await UserModel.deleteMany();
    await MessageModel.deleteMany();
    res.send("done");
});

