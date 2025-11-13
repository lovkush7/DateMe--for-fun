import type { Request, Response } from "express";
import loginService from "../../services/login.service.ts";

class LoginController {

    async login(
        req: Request,
        res: Response

    ){
        return await loginService.login(req,res);
    }

}
export default new LoginController();