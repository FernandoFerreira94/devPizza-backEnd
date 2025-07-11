"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
// funcao para salvar as imagens no servidor
exports.default = {
    // folder caminho para salvar as imagens
    upload(folder) {
        return {
            // funcao para salvar as imagens
            storage: multer_1.default.diskStorage({
                // caminho para salvar as imagens / __dirname pega o caminho da pasta atual "config"
                destination: (0, path_1.resolve)(__dirname, "..", "..", folder),
                // nome da imagem
                filename: (request, file, callback) => {
                    // criando o nome da imagem
                    const fileHas = crypto_1.default.randomBytes(16).toString("hex");
                    // nome da imagem
                    const fileName = `${fileHas}-${file.originalname}`;
                    return callback(null, fileName);
                }
            })
        };
    }
};
