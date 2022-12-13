import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 800px;
    justify-content: center;
    align-items: center;
    margin: 10px;
`
export const OwnerBox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 1000px;
    height: 700px;
    align-items: center;
    justify-content: center;
    gap: 300px;
    border-bottom: 2px solid black;
`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    width: 1000px;
    height: 700px;
    gap: 60px;
`

export const BoxTransactions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: inherit;
    
    h2{
        text-decoration: underline;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 45px;
    color: white;
    font-size: medium;
    background-color: black;
    cursor: pointer;
    :hover{
        transform: scale(1.008);
    }
`

export const BoxHistoryTransactions = styled.div`
    display: flex;
    flex-direction:column;
    width: 500px;
    height: 700px;
    align-items: center;
    gap: 20px;

    h2{
        text-decoration: underline;
        width: 350px;
        height: 5px;
    }
`

export const TransactionsBoxDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100px;
    border: 2px solid black;
    align-items: center;
    h6{
        color: black;
        margin: 5px;
    }
`

export const ListOverflow = styled.div`
     display: flex;
    flex-direction:column;
    width: 500px;
    height: 700px;
    align-items: center;
    overflow: auto;
    gap: 20px;

    h2{
        text-decoration: underline;
        width: 350px;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
`

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 50px;
    margin: 10px;
    align-items: center;
    button{
        height: 50px;
        width: 100px;
        cursor: pointer;
    }

    input{
        width: 120px;
    }
`