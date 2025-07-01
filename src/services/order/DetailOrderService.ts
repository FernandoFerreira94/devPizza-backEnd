import prismaClient from "../../prisma";

interface Detailrequest {
  order_id: string;
}

export default async function DetailOrderService({ order_id }: Detailrequest) {
  const orders = await prismaClient.item.findMany({
    where: {
      order_id,
    },
    include: { product: true, order: true },
  });
  return orders;
}
