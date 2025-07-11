"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
// permite enviar arquivos
const express_fileupload_1 = __importDefault(require("express-fileupload"));
// cors hook para permitir requisicoes
const cors_1 = __importDefault(require("cors"));
// path pega o caminho
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
}));
app.use(routes_1.router);
app.use("/files", express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp")));
app.use((err, req, res, next) => {
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
exports.default = app;
