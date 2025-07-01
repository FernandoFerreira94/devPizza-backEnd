import prismaClient from "../../prisma";

interface FinishRequest {
  order_id: string;
}

export default async function FinishOrderService({ order_id }: FinishRequest) {
  const finish = await prismaClient.order.update({
    where: {
      id: order_id,
    },
    data: {
      status: true,
    },
  });

  return finish;
}
