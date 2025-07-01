import { Response, Request } from "express";

import RemoveItemService from "../../services/order/RemoveItemService";



export default async function RemoveItemController(
  req: Request,
  res: Response
) {
  const item_id = req.query.item_id as string;

  try {
    const removeItem = await RemoveItemService({ item_id });
    res.json({
      item: removeItem,
      menssagen: "Pedido removido com sucesso",
    });
    return;
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
}
