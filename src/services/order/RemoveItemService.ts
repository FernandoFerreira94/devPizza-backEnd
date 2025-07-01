import prismaClient from "../../prisma";

interface ItemRequest {
  item_id: string;
}

export default async function RemoveItemService({ item_id }: ItemRequest) {
  try {
    const remoteItem = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return remoteItem;
  } catch (error) {
    if (error.code === "P2025") {
      throw new Error("Item não encontrado");
    }
  }
}
