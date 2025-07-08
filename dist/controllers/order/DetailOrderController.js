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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailOrderController;
const DetailOrderService_1 = __importDefault(require("../../services/order/DetailOrderService"));
function DetailOrderController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const order_id = req.query.order_id;
        const detailsOrders = yield (0, DetailOrderService_1.default)({ order_id });
        res.json(detailsOrders);
        return;
    });
}
