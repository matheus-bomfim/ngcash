import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
    height: 800px;

`

export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 450px;
    background-color: white;
    align-items: center;
    gap: 40px;

    h1{
        text-shadow: 1px 2px 2px black;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
`

export const Box = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;

    p{
        height: 25px;
        font-size: x-small;
        width: 250px;
        margin: 0px;
        color: red;
    }

    input{
        height: 25px;
        width: 250px;
    }
`

export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 55px;
    color: white;
    font-size: medium;
    background-color: black;
    cursor: pointer;
    :hover{
        transform: scale(1.008);
    }
`

export const ButtonLogin = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    width: 150px;
    cursor: pointer;
    :hover{
        transform: scale(1.008);
    }
`