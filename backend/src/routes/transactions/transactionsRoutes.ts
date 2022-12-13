import { Router } from "express";
import listFilterTransactionsController from "../../controllers/transactions/listFilterTransactions.controller";
import listTransactionsController from "../../controllers/transactions/listTransactions.controller";
import transactionController from "../../controllers/transactions/transactions.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import handleSchemaTransactionCreate from "../../middlewares/schema/handleTranscationSchema.middleware";
import { transactionSchema } from "../../schemas/transaction.schema";

const transactionRouter = Router()

transactionRouter.get("",authenticationMiddleware,listTransactionsController)
transactionRouter.get("/:type/",authenticationMiddleware,listFilterTransactionsController)
transactionRouter.post("",handleSchemaTransactionCreate(transactionSchema),authenticationMiddleware,transactionController)
export default transactionRouter