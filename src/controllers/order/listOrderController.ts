import { Request, Response } from "express";

import { ListOrderService } from "../../services/order/listOrderService";

class ListOrderController {

  async handle(req: Request, res: Response) {
    const listOrders = new ListOrderService();

    const orders = await listOrders.execute();

    res.json(orders);
  }
}

export { ListOrderController };
