import { Container, ContainerBox, Box, ButtonSubmit, Form, ButtonLogin } from "./style"
import {useForm} from "react-hook-form"
import Api from "../../utils/api"
import { useContext } from "react"
import { ModalContext } from "../../Providers/Modal"
import { useHistory } from "react-router-dom"
import { LogOutContext } from "../../Providers/LogOut"

interface ILogin{
    username:string
    password:string
}

const LoginUser = () => {
    const {register,handleSubmit} = useForm<ILogin>()
    
    const {setModal,setTextModal} = useContext(ModalContext)

    const {setLogin} = useContext(LogOutContext)
    
    const url = useHistory()

    const submitForm = (data:ILogin) => {
        Api.post("/login",data).then((res)=>{
            setTextModal("Login Realizado com Sucesso")
            localStorage.setItem("login","true")
            localStorage.setItem("token",res.data.token)
            setModal(true)
            setTimeout(()=>{setModal(false);url.push("/transactions")},2500)
            setLogin(true)
        }).catch((err)=>{
            setModal(true)
            setTimeout(()=>{setModal(false)},2500)
            setTextModal(err.response.data)
        })
    }
    return (
        <Container>
            <ContainerBox>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit(submitForm)}>
                <Box>
                    <span>UserName</span>
                    <input type="text" {...register("username")}/>
                </Box>
                <Box>
                    <span>Senha</span>
                    <input type="password" {...register("password")}/>
                </Box>
                <ButtonSubmit type="submit">
                    Login
                </ButtonSubmit>
                </Form>
                <ButtonLogin onClick={()=>{url.push("/register")}}>Cadastrar</ButtonLogin>
            </ContainerBox>
        </Container>
        )  
    }

export default LoginUser