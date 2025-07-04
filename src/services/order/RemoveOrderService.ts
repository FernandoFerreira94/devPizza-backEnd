import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {
    // deletando pedido com id passado por query
    const removeOrder = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return removeOrder;
  }
}
export { RemoveOrderService };
