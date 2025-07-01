import prismaClient from "../../prisma";

interface SendRequest {
  order_id: string;
}

export default async function SendOrderService({ order_id }: SendRequest) {
  const order = await prismaClient.order.update({
    where: {
      id: order_id,
    },
    data: {
      draft: false,
    },
  });
  return order;
}
