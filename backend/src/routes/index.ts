import { Router } from "express";
import { Express } from "express";
import accountRouter from "./accounts/accountRoutes";
import transactionRouter from "./transactions/transactionsRoutes";
import LoginRouter from "./user/LoginRoutes";
import userRouter from "./user/userRoutes";

const Route = Router()

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", LoginRouter)
    app.use("/account",accountRouter)
    app.use("/transactions",transactionRouter)
} 

export default appRoutes