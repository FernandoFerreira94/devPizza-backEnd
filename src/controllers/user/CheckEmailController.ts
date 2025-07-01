import { Request, Response } from "express";

import CheckEmailService from "../../services/user/CheckEmailService";

export default async function CheckEmailController(
  req: Request,
  res: Response
) {
  const { email } = req.body;

  try {
    const checkEmail = await CheckEmailService({ email });

    res.json(checkEmail);
    return;
  } catch (error) {
    res.status(400).json({ error: error.message || "Erro inesperado" });
    return;
  }
}
