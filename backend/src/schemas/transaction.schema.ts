import * as yup from "yup"
import {SchemaOf} from "yup"
import { ITransactionSchema } from "../interface/transaction.interface"

export const transactionSchema: SchemaOf<ITransactionSchema> = Object(yup.object().shape({
    creditedAccount: yup.string().required("Conta de Transferência Obrigatória"),
    value: yup.number().required("Valor de Transferência Obrigatório")
}))


