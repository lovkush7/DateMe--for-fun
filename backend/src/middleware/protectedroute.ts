import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { envconfig } from "../config/env.config.ts";
import { User } from "../entities/User.entities.ts";

// import {User}   from "../entities/User.entities.ts";


declare module "express" {
  interface Request {
    user?: Omit<User, "password">;
  }
}
const protectedroute = async(
    req: Request,
    res: Response,
    next: NextFunction
)=>{

    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(400).json({success:false , message:"unauthorize token"})
        }

        const decode = jwt.verify(token,envconfig.JWT_SECRET!);
        if(!decode){
            return res.status(401).json({success: false , message: 'cannot decode the token'})
        }
        const {userid} = decode as {userid: string };

        const user = await User.findOne({
          where: {
            id: userid
          },
          select: ["id","fullname","email"]
        });
        if(!user){
            return res.json({success:false, message: 'user dosent find'})
        }
         req.user = user;

         next()

    }catch(err){
        console.error("the error is"+err);
        res.status(401).json({success: false, message: 'internal server error'})
    }


}