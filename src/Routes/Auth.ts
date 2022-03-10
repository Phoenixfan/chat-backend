import express from "express";
import UserModel from "../Modules/User"
import { v4 as uuidv4 } from 'uuid';
import { createHash } from "crypto";


export const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const hash =  createHash("sha256");

    const { username, password } = req.body;
    const user1 = await UserModel.findOne({ username: username });
    if(user1) {
        res.status(409).json({ code: 409, err: false });
        return;
    }
    //console.log("running:" + req.body);
    hash.update(password);
    const user = new UserModel({
        _id: uuidv4(),
        username: username,
        password: hash.digest('hex').toString()
    });
    await user.save();
    res.send(user);
});

authRouter.post("/login", async (req, res) => {
    const hash =  createHash("sha256");

    const { username, password} = req.body;
    const user = await UserModel.findOne({ username: username });
    if(!user) {
        res.status(500).json({ code: 500, err: false });
        return;
    }
    hash.update(password)
    if(user.password != hash.digest('hex').toString()) {
        res.status(500).json({ code: 500, err: false });
        return;
    }
    res.send(user);
});

authRouter.get("/status", async (req, res) => {
    res.send("up");
});