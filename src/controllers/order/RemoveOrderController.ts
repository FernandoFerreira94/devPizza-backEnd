import { Response, Request } from "express";

import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const removeOrderService = new RemoveOrderService();

    const removeOrder = await removeOrderService.execute({ order_id });

    res.json({
      removeOrder,
      menssagen: "Pedido removido com sucesso",
    });

    return;
  }
}

export { RemoveOrderController };
