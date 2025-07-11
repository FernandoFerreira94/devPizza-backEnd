import { Response, Request } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    // descontruindo valores enviado do body
    const { name, price, description, category_id } = req.body;

    const createProductService = new CreateProductService();

    const menu = await createProductService.execute({
      name,
      price,
      description,
      banner: "",
      category_id,
    });

    res.json(menu);
  }

  return;
}

export { CreateProductController };
