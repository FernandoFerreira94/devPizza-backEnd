import { Request, Response } from "express";

import { ListByProductService } from "../../services/product/ListByProductService";

class ListByProductController {
    async handle( req:Request, res:Response) {
        // recuperando o id da categoria passada por query
        const category_id = req.query.category_id as string
        
        const listByProductservice = new ListByProductService()
        
        const listProducts = await listByProductservice.execute({category_id })

        res.json(listProducts)
        return
    }
}

export { ListByProductController }