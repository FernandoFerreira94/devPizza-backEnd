import app from "../src/server";
import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
  return app(req, res);
}
