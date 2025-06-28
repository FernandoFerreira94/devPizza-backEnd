import { Response, Request } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req:Request, res:Response){
         // descontruindo valores enviado do body
        const {name, price, description, category_id} = req.body

        if (!req.file) {
            throw new Error("Erro ao carregar a imagem")
        } else {
            // descontruindo valores enviado do body 
            const {originalname, filename: banner } = req.file // descontruindo o banner

            const createProductService = new CreateProductService()

        const product = await createProductService.execute({name, price, description, banner, category_id})
        res.json(product)
        }

      
        return 
    }
}

export { CreateProductController}