import type { Request, Response } from "express";
import { User } from "../entities/User.entities.ts";
import bcrypt from "bcryptjs";
import generationtoken from "../lib/cookie.lib.ts";

class loginService {
    async login(
        req: Request,
        res: Response
    ){
        const {email,password} = req.body;
        try{
            const user = await User.findOne({
                where:{
                    email
                }
            });

            if(!user){
                return {success:false , message: "user dosent exist please signup"}
            }

         const ischeckingpass = bcrypt.compare(password,user.password);

         if(!ischeckingpass){
            return {success: false , message:"password incorrect "}
         }

          generationtoken(res,user.id);
          return {
            success: true,
            email: user.email,
            fullname: user.fullname,
            message: "login successfully"
          }
         

        }catch(err){
            console.error("the error is "+err);
            return{success: false , messages: "inter server error "}
        }

    }
}
export default new loginService();