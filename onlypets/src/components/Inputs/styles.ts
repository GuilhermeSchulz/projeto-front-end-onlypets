import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: var(--text-size-2);
    color: var(--black);
`

export const Input = styled.input`
    height: 38px;
    width: 300px;
    border: var(--color-primary-1) 1px solid;
    color: var(--color-primary-hover);
    padding-left: 5px;
    
    border-radius: 4px;

    &::placeholder {
        color: var(--color-primary-1);
    }

    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
        border-color: var(--color-primary-hover);
        
    }
`


