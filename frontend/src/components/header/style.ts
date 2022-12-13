import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.5vmax;
    gap: 950px;
    background-color: black;

    img{
        width: 60px;
        height: 60px;
        cursor: pointer;

        :hover{
        transform: scale(1.1);
    }
    }
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

export const Li = styled.li`
    list-style: none;
    color: white;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
`