import mongoose from "mongoose";

mongoose.connect('mongodb://root:password123@mongodb-sharded-4-1647175611:27017/', {dbName: "chat"});
console.log("MongoDB Connected!");

import express from "express";
const app = express();
const port = 8080;

import {receiveRouter} from "./Routes/Receive";
import {sendRouter} from "./Routes/Send";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});

app.use("/receive", receiveRouter);
app.use("/send", sendRouter);

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "healthy" );
});

app.post("/post",  (req, res) => {
    res.send(req.body);
});
