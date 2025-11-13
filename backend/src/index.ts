import "reflect-metadata"
import AppDataSource from "./config/database.config.ts"
import express from "express"
import router from "./Routes/userroute/User.routes.ts";
import cookieparser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(cookieparser())


AppDataSource.initialize()
.then(()=>{
    console.log("App datasource has been initialize");
    app.use("/auth",router)
    app.listen(8000,()=>{
        console.log("server is running");
    })
})
.catch((err)=>{
    console.error("the error is "+err)
})