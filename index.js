const express = require("express")
require("dotenv").config();
const cors = require("cors")
const db = require("./db")




const app = express()
app.use(express.json());
app.use(cors());

const roleRouter = require("./routers/routes/role");
app.use(roleRouter);
const userRouter = require("./routers/routes/user")
app.use(userRouter);
const todoRouter = require("./routers/routes/todos")
app.use(todoRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
})