import { Request, Response } from "express";

import FinishOrderService from "../../services/order/FinishOrderService";

export default async function FinishOrderController(
  req: Request,
  res: Response
) {
  const { order_id } = req.body;

  const finish = await FinishOrderService({ order_id });

  res.json(finish);
  return;
}
