import styled from 'styled-components';

export const StyledUl = styled.ul`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  overflow-x: auto;

  .card-shelter {
    height: 330px;
    width: 275px;
    min-width: 275px;
    display: flex;
    flex-direction: column;
  }

  .card-shelter img {
    object-fit: cover;
    height: 75%;
    width: 100%;
    border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
  }

  .card-shelter div {
    padding: 10px;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    background-color: var(--color-primary-1);
    color: var(--color-secondary-1);
    border-radius: 0 0 var(--border-radius-1) var(--border-radius-1);
  }
`;
