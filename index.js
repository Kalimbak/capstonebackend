import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import jobRouter from "./routers/jobrouter.js"
import router from "./routers/userrouter.js";
import articleRouter from "./routers/blogRouter.js";
import blogRouter from "./routers/blogsrouter.js";
import homeRouter from "./routers/homepage.js";
import msgRouter from "./routers/messagerouter.js";
import comRouter from "./routers/commentsrouter.js";
import cors from "cors";

dotenv.config()

const port = process.env.PORT

let DB;


 if (process.env.NODE_ENV === 'test') {
  DB = process.env.DB_TEST;

} else DB = process.env.PORT;

mongoose.connect('mongodb+srv://eazy:987654321k@cluster0.88vdgop.mongodb.net/kevin?retryWrites=true&w=majority')
console.log('your DB has been connected');



const app = express()

app.use(cors());
app.use(express.json());
app.use(router);
app.use(articleRouter);
app.use(blogRouter);
app.use(jobRouter);
app.use(homeRouter);
app.use(msgRouter);
app.use(comRouter);

app.listen(port, () =>console.log(`server running at ${port}`));


export default app;