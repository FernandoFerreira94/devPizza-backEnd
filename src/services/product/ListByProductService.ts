import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByProductService {

    async execute({category_id}: ProductRequest) {
        const findByCategory = await prismaClient.product.findMany({
            // retorna um arry dos produtos onde category_id seja igual ao category_id que foi passado
           where: {
               category_id
               // retornando apenas oque preciso
           }
        })
        return findByCategory
    }
}

export { ListByProductService}