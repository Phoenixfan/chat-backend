import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/', {dbName: "chat"});
console.log("MongoDB Connected!");

import express from "express";
const app = express();
const port = 8080;

import { authRouter } from "./Routes/Auth";
import {resetRouter} from "./Routes/Reset";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});

app.use("/auth", authRouter);
app.use("/reset", resetRouter);

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "healthy" );
});

app.post("/post",  (req, res) => {
    res.send(req.body);
});
