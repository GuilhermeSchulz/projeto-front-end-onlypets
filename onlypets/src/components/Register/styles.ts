import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 623px;
    width: 448px;
    margin: 10px auto;
    border-radius: 0 5px 5px 0;
    background: var(--color-secondary-1);

    h1{
        margin: 48px auto;
        font-weight: 700;
    }

    span{
        margin: -5px 0px 10px 0px;
        font-size: 12px;
        color: #EF4545;
    }

    .button{
        display: flex;
        flex-direction: column;
        margin-top: 38px;
        gap: 20px;
    }


`;