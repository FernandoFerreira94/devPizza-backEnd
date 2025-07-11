import { Request, Response } from "express";
import GetUserService from "../../services/user/getUserService";

export default async function GetUserController(req: Request, res: Response) {
  const result = await GetUserService();

  if (!result.ok) {
    res.status(500).json(result);
    return;
  }

  res.status(200).json({
    status: "ok",
    totalUsers: result.total,
    users: result.users, // se quiser listar todos
  });
  return;
}
