import { Router } from "express";
import listAccountController from "../../controllers/accounts/listAccount.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";

const accountRouter = Router()

accountRouter.get("",authenticationMiddleware,listAccountController)

export default accountRouter