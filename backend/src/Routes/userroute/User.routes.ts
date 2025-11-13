import express, { Router } from "express"
import SignupController from "../../controller/signup/Signup.controller.ts";
import loginController from "../../controller/login/login.controller.ts";
import LogoutController from "../../controller/logout/Logout.controller.ts";

const router: express.Router = Router();

router.post("/signup",SignupController.signup);
router.post("/login",async(req,res)=>{
  const user = await loginController.login(req,res)
  res.status(200).json({success: true , data:user});
})
router.post("/logout",async(req,res)=>{
const user = await LogoutController.logout(req,res);
res.status(200).json({success: true ,data:user})
})

export default router;