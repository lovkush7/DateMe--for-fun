import type { Request, Response } from "express";
import LogoutServices from "../../services/Logout.services.ts";

class Logout {
  async logout (
    req: Request,
    res: Response
  ){
    return await LogoutServices.logout(req,res)

  }
}
export default new Logout();