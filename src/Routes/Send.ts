import express from "express";
import { v4 as uuidv4 } from 'uuid';
import MessageModel from "../Modules/Message";
import UserModel from "../Modules/User";

export const sendRouter = express.Router();

sendRouter.post("/", async (req, res) => {
    const { sender, receiver, message } = req.body;
    const user1 = await UserModel.findOne({ _id: sender });
    const user2 = await UserModel.findOne({ username: receiver });
    if(!(user1 && user2)) {
        res.status(500);
        return;
    }
    const msg = new MessageModel({
        _id: uuidv4(),
        sender: sender,
        receiver: user2._id,
        message: message,
        date: Date.now()
    });
    await msg.save();
    res.send(msg);
});