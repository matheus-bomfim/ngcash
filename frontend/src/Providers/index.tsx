import { ReactNode } from "react";
import LogOut from "./LogOut";
import { Modal } from "./Modal";

interface IChildren{
    children:ReactNode
}

const Providers = ({children}:IChildren) => {
    return(
        <LogOut>
        <Modal>
            {children}
        </Modal>
        </LogOut>
    )
}

export default Providers