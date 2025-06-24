import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({name}: CategoryRequest){

        if(name === "")
        {
            throw new Error("Name incorrect")
        }

        //.create() cria uma nova categoria
        const category = await prismaClient.category.create({
            data: {
                name: name
            }, select:{
                id: true,
                name: true,
                created_at: true,
                update_at: true,
            }
        })

        return category
       
    }
}

export {CreateCategoryService}