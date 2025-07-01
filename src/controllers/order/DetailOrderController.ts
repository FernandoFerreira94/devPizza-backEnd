import { Request, Response } from "express";

import DetailOrderService from "../../services/order/DetailOrderService";

export default async function DetailOrderController(
  req: Request,
  res: Response
) {
  const order_id = req.query.order_id as string;

  const detailsOrders = await DetailOrderService({ order_id });

  res.json(detailsOrders);

  return;
}
