import { Response, Request } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";
import { UploadedFile } from "express-fileupload";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class CreateProductController {
  async handle(req: Request, res: Response) {
    // descontruindo valores enviado do body
    const { name, price, description, category_id } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      throw new Error("Erro ao carregar a imagem");
    } else {
      // descontruindo valores enviado do body
      const file: UploadedFile = req.files["file"];

      const createProductService = new CreateProductService();

      const resultFile: UploadApiResponse = await new Promise(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream({}, function (error, result) {
              if (error) {
                reject();
                return;
              }

              resolve(result);
            })

            .end(file.data);
        }
      );

      console.log(resultFile);

      const menu = await createProductService.execute({
        name,
        price,
        description,
        banner: resultFile.url,
        category_id,
      });

      res.json(menu);
    }

    return;
  }
}

export { CreateProductController };
