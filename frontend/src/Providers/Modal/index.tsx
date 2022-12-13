import { createContext, ReactNode, useState } from "react";

interface IChildren{
    children:ReactNode
}

interface IModal{
    modal:boolean
    setModal: (newState: boolean) => void
    textModal: string
    setTextModal: (newState: string) => void
}

const initialValue:IModal = {
    modal:false,
    setModal: () => {},
    textModal:"",
    setTextModal: () => {}
}

export const ModalContext = createContext<IModal>(initialValue)

export const Modal = ({children}:IChildren) => {
    const [modal,setModal] = useState(false)
    const [textModal,setTextModal] = useState("")

    return(
        <ModalContext.Provider value={{modal,setModal,textModal,setTextModal}}>
            {children}
        </ModalContext.Provider>
    )
}