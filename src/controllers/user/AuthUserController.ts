import { Request, Response } from "express";
import AuthUserService from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    // descontruindo valores enviado do body
    const { email, password } = req.body;

    try {
      const authUserService = new AuthUserService();

      const auth = await authUserService.execute({ email, password });
      res.json(auth);

      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(500).json({ error: "Erro inesperado no login" });
      return;
    }
  }
}

export { AuthUserController };
