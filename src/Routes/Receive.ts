import express from "express";
import MessageModel from "../Modules/Message";

export const receiveRouter = express.Router();

receiveRouter.post("/all", async (req, res) => {
    const { uid } = req.body;
    let msgS = await MessageModel.find({receiver: uid});
    let msgR = await MessageModel.find({sender: uid});
    let msg = msgR.concat(msgS);
    res.status(200).json(msg);
})