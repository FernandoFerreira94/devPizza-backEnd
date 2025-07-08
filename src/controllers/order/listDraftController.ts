import { Request, Response } from "express";
import ListDraftService from "../../services/order/listDraftService";

export default async function ListDraftController(req: Request, res: Response) {
  const listaDraft = await ListDraftService();

  res.json(listaDraft);
  return;
}
