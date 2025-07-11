import { Request, Response } from "express-serve-static-core";
import app from "../src/server";

export default function handler(req: Request, res: Response) {
  return app(req, res);
}
