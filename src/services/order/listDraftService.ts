import prismaClient from "../../prisma";

export default async function ListDraftService() {
  const order = await prismaClient.order.findMany({
    where: {
      status: false,
    },
  });

  return order;
}
