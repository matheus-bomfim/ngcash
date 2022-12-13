import { Router } from "express";
import LoginController from "../../controllers/users/Login.controller";
const LoginRouter = Router()

LoginRouter.post(
    "",
    LoginController
)

export default LoginRouter

