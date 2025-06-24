import crypto from "crypto"
import multer from "multer"
import { extname, resolve } from "path"

// funcao para salvar as imagens no servidor

export default {
// folder caminho para salvar as imagens
    upload(folder:string){
        return {
            // funcao para salvar as imagens
            storage: multer.diskStorage({
                // caminho para salvar as imagens / __dirname pega o caminho da pasta atual "config"
                destination: resolve(__dirname, "..","..",folder),
                // nome da imagem
                filename: (request, file, callback)=>{
                    // criando o nome da imagem
                    const fileHas = crypto.randomBytes(16).toString("hex")
                    // nome da imagem
                    const fileName = `${fileHas}-${file.originalname}`

                    return callback(null, fileName)
                }
            })
        }
    }
}