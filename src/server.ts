import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
// permite enviar arquivos
import fileUpload from "express-fileupload";
// cors hook para permitir requisicoes
import cors from "cors";
// path pega o caminho
import path from "path";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  })
);

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // se for uma instancia tipo error
    res.status(400).json({ error: err.message });
    return;
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
  return;
});

app.get("/", (req, res) => {
  res.json({ status: "online", message: "API DevPizza está funcionando 🍕" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
