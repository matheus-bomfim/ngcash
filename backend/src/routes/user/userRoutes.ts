import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import listOwnerController from "../../controllers/users/listOwner.controller";
import listUserController from "../../controllers/users/listUser.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import handleSchemaUserCreate  from "../../middlewares/schema/handleUserSchema.middleware";
import { userSchema } from "../../schemas/user.schema";

const userRouter = Router()

userRouter.post(
    "",
    handleSchemaUserCreate(userSchema),
    createUserController
)
userRouter.get(
    "",
    authenticationMiddleware,
    listUserController
)
userRouter.get(
    "/user",
    authenticationMiddleware,
    listOwnerController
)


export default userRouter

