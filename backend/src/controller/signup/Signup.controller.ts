import type { Request, Response } from "express";
import { User } from "../../entities/User.entities.ts";
import generationtoken from "../../lib/cookie.lib.ts";

class SignupController {
    async signup(
        req: Request,
        res: Response
    ){

        const {fullname,email,password} = req.body;

        try{
            const user = await User.findOne({
                where:{
                    email
                }
            });

            if(user){
                return res.status(401).json({success: false , messages:"user already exist"})
            }

            const u = new User();
            u.fullname = fullname;
            u.email = email;
            u.password = password;
            await u.save();

            generationtoken(res,u.id);

            res.json({
                success: true,
                fullname: u.fullname,
                email: u.email,
                messages: "signup successfully "
            });

            

        }catch(err){
            console.log("the error is "+err);
            res.status(401).json({success: false ,message: "internal server error "})
        }

    }
}

export default new SignupController;