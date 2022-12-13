import { useContext, useEffect, useState } from "react"
import Api from "../../utils/api"
import { Box, BoxHistoryTransactions, BoxTransactions, ButtonSubmit, Container, Form, ListOverflow, OwnerBox, TransactionsBoxDetail, DivButton } from "./style"
import {useForm} from "react-hook-form"
import { useHistory } from "react-router-dom"
import { ModalContext } from "../../Providers/Modal"
interface IAccount{
    id:string
    balance: number
}

interface IListUser{
    id:string
    username:string
    account:IAccount
}


interface IAccountTransaction{
    id: string
    balance: number
}

interface IListTransactions{
    id:string
    debitedAccount: IAccountTransaction
    creditedAccount: IAccountTransaction
    value:number
    created_at: string
}


interface ITransactions{
    creditedAccount: string
    value:number
}


const ContainerTransactions = () => {
    const [users,setUsers] = useState<IListUser[]>([])
    const [owner,setOwner] = useState<IListUser>({} as IListUser)
    const [filter, setFilter] = useState<string>("")
    const [filterTransactions,setFilterTransactions] = useState<IListTransactions[]>([])
    
    const {setModal,setTextModal} = useContext(ModalContext)

    const token = localStorage.getItem("token")
    
    const url = useHistory()

    const {handleSubmit,register} = useForm<ITransactions>()
    
    useEffect(()=>{
        Api.get("/users",{
            headers: {
                'Authorization': token 
              }
        }).then(res=>setUsers(res.data))
    },[users,token])
    
    useEffect(()=>{
        Api.get(`/transactions/${filter}`,{
            headers: {
                'Authorization': token 
              }
        }).then(res=>setFilterTransactions(res.data))
    },[filterTransactions,token,filter])


    useEffect(()=>{
        Api.get("/users/user",{
            headers: {
                'Authorization': token 
              }
        }).then(res=>setOwner(res.data)).catch(()=>{
            url.push("/login")
        })
    },[owner,token,url])

    
    const CreateTransaction = (data:ITransactions) => {
        Api.post("/transactions",data,{
            headers: {
                'Authorization': token 
              }
        }).then(()=>{
            setModal(true)
            setTextModal("Transação Realizada com Sucesso")
            setTimeout(()=>{setModal(false)},2500)
        }).catch((err)=>{
            setModal(true)
            setTextModal(err?.response?.data||"Erro na Transação")
            setTimeout(()=>{setModal(false)},2500)
        })
    }

    return(
        <Container>
            <OwnerBox>
                <h2>Usuário: {owner.username}</h2>
                <h2>Saldo: {`R$ ${owner.account?.balance}`}</h2>
            </OwnerBox>
            <Box>
                <BoxTransactions>
                    <h2>Transações</h2>
                    <Form onSubmit={handleSubmit(CreateTransaction)}>
                    <label>
                        Usuário
                    </label>
                    <input list="list" placeholder="Escolha o Cliente" {...register("creditedAccount")}/>
                    <datalist id="list">
                        {users.map((elem)=>{
                            if(elem.username !== owner.username){
                                return (
                                    <option key={elem.id} value={elem.username}>{elem.username}</option>
                                    )
                                }
                                return <></>
                        })}
                    </datalist>
                    <label>
                        Valor
                    </label>
                    <input type="text" {...register("value")}/>
                    <ButtonSubmit type="submit">
                        Transferir
                    </ButtonSubmit>
                    </Form>
                </BoxTransactions>
                <BoxHistoryTransactions>
                    <h2>Histórico de Transações</h2>
                        <input type="date" onChange={(e)=>setFilter(e.target.value)} />
                    <DivButton>
                        <button onClick={()=>setFilter("")}>Todas</button>
                        <button onClick={()=>setFilter("cashin")}>Cash-In</button>
                        <button onClick={()=>setFilter("cashout")}>Cash-Out</button>
                    </DivButton>
                    <ListOverflow>
                    { filterTransactions.length > 0 ?
                            filterTransactions.map((elem)=>{
                                let credited = ""
                                let debited = ""
                                users.filter((elemUser)=>{
                                    if(elem.creditedAccount.id === elemUser.account.id){
                                        credited = elemUser.username
                                    }
                                    if(elem.debitedAccount.id === elemUser.account.id){
                                        debited = elemUser.username
                                    }
                                    return<></>
                                })
                                const date = `${elem.created_at.slice(8,10)}/${elem.created_at.slice(5,7)}/${elem.created_at.slice(0,4)}`
                                return(
                                        <TransactionsBoxDetail key={elem.id}>
                                            <h6>Remetente: {debited}</h6>
                                            <h6>Destinatario: {credited}</h6>
                                            <h6>Valor: {`R$ ${elem.value}`}</h6>
                                            <h6>Data: {date}</h6>
                                        </TransactionsBoxDetail>
                                    )
                                })
                                : 
                                <h3>Nenhuma Transação</h3>
                        }
            </ListOverflow>
                </BoxHistoryTransactions>
            </Box>
        </Container>
    )
}

export default ContainerTransactions