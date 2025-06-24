import { Router } from "express";
import multer from "multer";

// USERS
import { CreateUserController } from "./controllers/user/CreateUserCrontroller";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

// CATEGORY
import {CreaterCategoryController} from "./controllers/category/CreateCategoryController"
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//Product
import {CreateProductController} from "./controllers/product/CreateProductController"

// MIDDLEWARE
import { isAuthenticated } from "./middlewares/isAuthenticated"

//MULTER
import  uploadConfing  from "./config/multer"

const router = Router()

const upload = multer(uploadConfing.upload("./tmp"))

// -- ROTAS USER -- 
router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle) 

// -- ROTAS CATEGORY --

router.post("/category", isAuthenticated, new CreaterCategoryController().handle)

router.get("/category", isAuthenticated, new ListCategoryController().handle)

// -- ROTAS PRODUCTS

router.post("/product", isAuthenticated, new CreateProductController().handle)

export { router }