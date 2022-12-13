import { createContext, ReactNode, useState } from "react";

interface IChildren{
    children:ReactNode
}

interface ILogout{
    login:boolean
    setLogin: (newState:boolean) => void
}

export const LogOutContext = createContext<ILogout>({} as ILogout)

export const LogOut = ({children}:IChildren) => {

    const [login,setLogin] = useState(false || Boolean(localStorage.getItem("login")))

    return(
        <LogOutContext.Provider value={{login,setLogin}}>
            {children}
        </LogOutContext.Provider>
    )
}

export default LogOut