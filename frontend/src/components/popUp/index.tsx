import { useContext } from "react"
import { ModalContext } from "../../Providers/Modal"
import { Box, Container } from "./style"

const PopUp = () => {
    const {modal,textModal} = useContext(ModalContext)
    return(
        <Container modal={modal}>
            <Box>
                <h5>{textModal}</h5>
            </Box>
        </Container>
    )
}

export default PopUp