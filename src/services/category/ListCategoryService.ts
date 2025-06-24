import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {

        //.findMany() retorna todas as categorias
        const category = await prismaClient.category.findMany({

            select: {
                id:true,
                name:true
            }
        })

        return category
    }
}

export { ListCategoryService}