"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// multer hook para salvar as imagens
const multer_1 = __importDefault(require("multer"));
// USERS
const CreateUserCrontroller_1 = require("./controllers/user/CreateUserCrontroller");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CheckEmailController_1 = __importDefault(require("./controllers/user/CheckEmailController"));
// CATEGORY
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
//Product
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByProductController_1 = require("./controllers/product/ListByProductController");
//Order
const CreateOrdercontroller_1 = require("./controllers/order/CreateOrdercontroller");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const listOrderController_1 = require("./controllers/order/listOrderController");
const listDraftController_1 = __importDefault(require("./controllers/order/listDraftController"));
const DetailOrderController_1 = __importDefault(require("./controllers/order/DetailOrderController"));
const FinishOrderController_1 = __importDefault(require("./controllers/order/FinishOrderController"));
// Item
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = __importDefault(require("./controllers/order/RemoveItemController"));
const SendOrderController_1 = __importDefault(require("./controllers/order/SendOrderController"));
// MIDDLEWARE
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
//MULTER
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
// funcao para salvar as imagens
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// -- ROTAS USER --
router.post("/users", new CreateUserCrontroller_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/me", isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
router.post("/users/check-email", CheckEmailController_1.default);
// -- ROTAS CATEGORY --
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreaterCategoryController().handle);
router.get("/category", isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// -- ROTAS PRODUCTS
/*
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
*/
router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get("/category/product", isAuthenticated_1.isAuthenticated, new ListByProductController_1.ListByProductController().handle);
//-- Rotas Order
router.get("/orders", isAuthenticated_1.isAuthenticated, new listOrderController_1.ListOrderController().handle);
router.get("/orders/draft", isAuthenticated_1.isAuthenticated, listDraftController_1.default);
router.post("/order", isAuthenticated_1.isAuthenticated, new CreateOrdercontroller_1.CreateOrderController().handle);
router.delete("/order", isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.get("/order/detail", isAuthenticated_1.isAuthenticated, DetailOrderController_1.default);
//-- Rotas Item
router.post("/order/add", isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete("/order/remove", isAuthenticated_1.isAuthenticated, RemoveItemController_1.default);
router.put("/order/send", isAuthenticated_1.isAuthenticated, SendOrderController_1.default);
router.put("/order/finish", isAuthenticated_1.isAuthenticated, FinishOrderController_1.default);
