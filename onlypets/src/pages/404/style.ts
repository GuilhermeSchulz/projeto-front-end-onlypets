import styled from "styled-components";
import background from "../../assets/background.svg"

export const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
background-color: var(--color-secondary-1);
background-image: url(${background});
min-height: 700px;
overflow: auto;
h2{
    font-size: var(--title-size-3);
    color: var(--color-primary-1);
    transition: 0.5s;
    @media (min-width: 768px) {
        font-size: var(--title-size-1);
        
    }
}
`