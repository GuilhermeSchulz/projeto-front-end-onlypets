import styled from "styled-components";
import footer from "../../assets/footer.svg"

export const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
background-color: var(--color-secondary-1);
background-image: url(${footer});
h2{
    font-size: var(--title-size-1);
    color: var(--color-primary-1);
}
`