import { Router } from "express";
// multer hook para salvar as imagens
import multer from "multer";

// USERS
import { CreateUserController } from "./controllers/user/CreateUserCrontroller";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

// CATEGORY
import { CreaterCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//Product
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByProductController } from "./controllers/product/ListByProductController";

//Order
import { CreateOrderController } from "./controllers/order/CreateOrdercontroller";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

// MIDDLEWARE
import { isAuthenticated } from "./middlewares/isAuthenticated";

//MULTER
import uploadConfing from "./config/multer";

const router = Router();

// funcao para salvar as imagens
const upload = multer(uploadConfing.upload("./tmp"));

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS CATEGORY --
router.post(
  "/category",
  isAuthenticated,
  new CreaterCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// -- ROTAS PRODUCTS
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByProductController().handle
);

//-- Rotas Order
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

export { router };
