import type { Request, Response } from "express";

class LogoutService {
    async logout(
        req: Request,
        res: Response
    ){
        res.cookie("jwt","",{maxAge:0})
        return {success: true , message: "logout successfully"}

    }

}
export default new LogoutService();