import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black-opacity);
`

export const ModalRegisterStyled = styled.div`
    display: flex;
    width: 800px;
    height: 80%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 30px;
    
`

export const ModalDiv = styled.div`
    width: 50%;
    height: 623px;
    background: var(--color-secondary-1);
    border-right: 1px solid var(--color-primary-1);
    padding: 30px;
    border-radius: 5px 0 0 5px;
    color: var(--color-primary-2);

    h2{
        font-size: var(--title-size-1);
        text-align: center;
        margin-top: -30px;
    }
    p{
        margin-top: 50px;
        font-size: var(--text-size-2);
    }
`