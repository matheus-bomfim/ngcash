import styled from "styled-components";
interface Pro{
    modal: boolean
}
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1500px;
    height: 100px;
    align-items: center;
    justify-content: end;
    display: ${(props:Pro) => props.modal ? "flex" : "none"};
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 80px;
    background-color: white;
    align-items: center;
    text-align: center;
    h5{
        color: black;
    }

`