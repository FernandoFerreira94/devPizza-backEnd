"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByProductController = void 0;
const ListByProductService_1 = require("../../services/product/ListByProductService");
class ListByProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // recuperando o id da categoria passada por query
            const category_id = req.query.category_id;
            const listByProductservice = new ListByProductService_1.ListByProductService();
            const listProducts = yield listByProductservice.execute({ category_id });
            res.json(listProducts);
            return;
        });
    }
}
exports.ListByProductController = ListByProductController;
