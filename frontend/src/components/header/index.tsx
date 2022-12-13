import { Container, Li, Ul } from "./style"
import logo from "../../utils/logo.svg"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { LogOutContext } from "../../Providers/LogOut"
const Header = () => {
    const {login,setLogin} = useContext(LogOutContext)
    
    const url = useHistory()
    
    return(
        <>
        <Container>
            <img src={logo} alt="logo" onClick={()=>{url.push("/")}}></img>
            <Ul>
                <Li onClick={()=>{url.push("/")}}>
                    Home
                </Li>
                <Li onClick={()=>{ localStorage.getItem("token") ? url.push("/transactions") : url.push("/login")}}>
                    Transações
                </Li>
                    {login ? 
                    <Li onClick={()=>{localStorage.removeItem("login");url.push("/login");setLogin(false);localStorage.removeItem("token")}}>{"Logout"}</Li> : 
                    <Li onClick={()=>{url.push("/login")}}>{"Login"}</Li>}
            </Ul>
        </Container>
        </>
    )
}
export default Header