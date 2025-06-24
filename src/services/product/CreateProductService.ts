import prismaClient from "../../prisma";

interface ProductRequest {
    name:string,
    price:string,
    banner:string,
    description:string,
    category_id:string
}

class CreateProductService {
    async execute({name, price, description, banner, category_id}:ProductRequest){
      
        

        const product = await prismaClient.product.create({
            data:{
                name,
                price,
                description,
                banner,
                category_id
            }, select: {
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true,
                created_at: true,
                update_at: true,
            }
        })

        return product


    }
}

export {CreateProductService}