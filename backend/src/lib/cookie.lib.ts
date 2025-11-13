import jwt from "jsonwebtoken"
import { envconfig } from "../config/env.config.ts"
import type { Response } from "express"
const generationtoken =(
    res:Response,
    userid: string | number
)=>{
    const token = jwt.sign(
        {userid},
        envconfig.JWT_SECRET!,
        {
            expiresIn: "7d"
        });

        res.cookie("jwt",token ,{
            maxAge: 7*24*60*60*1000,
            sameSite: "lax",
            httpOnly: true,
            secure: false
        })
        return token;
}
 export default generationtoken;