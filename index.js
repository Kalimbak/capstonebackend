import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import router from "./routers/userrouter.js";
import blogRouter from "./routers/blogsrouter.js";
import homeRouter from "./routers/homepage.js";

dotenv.config()

const port = process.env.PORT

mongoose.connect('mongodb+srv://Kalimba:kales12002.@cluster0.gc9iw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
console.log('your DB has been connected');



const app = express()


app.use(express.json());
app.use(router);
app.use(blogRouter);
app.use(homeRouter);
app.listen(port, () =>console.log(`server running at ${port}`));