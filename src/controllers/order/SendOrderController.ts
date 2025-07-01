import { Request, Response } from "express";

import SendOrderService from "../../services/order/sendOrderService";

export default async function SendOrderController(req: Request, res: Response) {
  const { order_id } = req.body;

  const sendOrder = await SendOrderService({ order_id });

  res.json(sendOrder);
  return;
}
