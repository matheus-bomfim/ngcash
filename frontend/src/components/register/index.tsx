import { Container, ContainerBox, Box, ButtonSubmit, Form } from "./style"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import Api from "../../utils/api"
import { useContext } from "react"
import { ModalContext } from "../../Providers/Modal"
import { useHistory } from "react-router-dom"

interface IRegister{
    username:string
    password:string
}

const RegisterUser = () => {
    const {setTextModal,setModal} = useContext(ModalContext)
    
    const schema = yup.object().shape({
        username: yup.string().min(3,"Username tem que possuir no Mínimo 3 caracteres"),
        password: yup.string().matches(/^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/,"Senha deve Conter no Mínimo 8 caracteres, uma letra maiúscula e um número")
    })
    
    const {register,handleSubmit,formState:{errors}} = useForm<IRegister>({
        resolver:yupResolver(schema)
    })
    
    const url = useHistory()

    const submitForm = (data:IRegister) => {
        
        Api.post("/users",data).then((res)=>{
            setModal(true)
            setTextModal("Cadastro Realizado com Sucesso")
            setTimeout(()=>{setModal(false);url.push("/login")},2500)
        }).catch((err)=>{
            setModal(true)
            setTextModal(err.response.data)
            setTimeout(()=>setModal(false),2500)
        })
    }
    
    return(
        <Container>
            <ContainerBox>
                <h1>Cadastro</h1>
                <Form onSubmit={handleSubmit(submitForm)}>
                <Box>
                    <span>UserName</span>
                    <input type="text" {...register("username")}/>
                    {errors.username && <p>{errors.username.message}</p>}
                </Box>
                <Box>
                    <span>Senha</span>
                    <input type="password" {...register("password")}/>
                    {errors.password && <p>{errors.password.message}</p>}
                </Box>
                <ButtonSubmit type="submit">
                    Cadastrar
                </ButtonSubmit>
                </Form>
            </ContainerBox>
        </Container>
    )
}

export default RegisterUser