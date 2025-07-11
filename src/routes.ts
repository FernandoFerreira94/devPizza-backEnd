import { Router } from "express";

// USERS
import { CreateUserController } from "./controllers/user/CreateUserCrontroller";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import CheckEmailController from "./controllers/user/CheckEmailController";
import GetUserControoler from "./controllers/user/GetUserControoler";

// CATEGORY
import { CreaterCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//Product
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByProductController } from "./controllers/product/ListByProductController";

//Order
import { CreateOrderController } from "./controllers/order/CreateOrdercontroller";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { ListOrderController } from "./controllers/order/listOrderController";
import ListDraftController from "./controllers/order/listDraftController";
import DetailOrderController from "./controllers/order/DetailOrderController";
import FinishOrderController from "./controllers/order/FinishOrderController";

// Item
import { AddItemController } from "./controllers/order/AddItemController";
import RemoveItemController from "./controllers/order/RemoveItemController";
import SendOrderController from "./controllers/order/SendOrderController";

// MIDDLEWARE
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// funcao para salvar as imagens

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.post("/users/check-email", CheckEmailController);
router.get("/users/get", GetUserControoler);

// -- ROTAS CATEGORY --
router.post(
  "/category",
  isAuthenticated,
  new CreaterCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// -- ROTAS PRODUCT --

router.post("/product", isAuthenticated, new CreateProductController().handle);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByProductController().handle
);

//-- Rotas Order
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get("/orders/draft", isAuthenticated, ListDraftController);
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.get("/order/detail", isAuthenticated, DetailOrderController);

//-- Rotas Item
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete("/order/remove", isAuthenticated, RemoveItemController);
router.put("/order/send", isAuthenticated, SendOrderController);
router.put("/order/finish", isAuthenticated, FinishOrderController);

export { router };
