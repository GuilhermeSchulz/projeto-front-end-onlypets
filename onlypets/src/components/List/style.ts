import styled from 'styled-components';

export const StyledUl = styled.ul`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  overflow-x: auto;

  .card {
    height: 330px;
    width: 275px;
    min-width: 275px;
    display: flex;
    flex-direction: column;
  }

  .card img {
    object-fit: cover;
    height: 75%;
    width: 100%;
    border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
  }

  .card-shelter div {
    background-color: var(--color-primary-1);
    color: var(--color-secondary-1);
  }

  .card-pet > div,
  .card-shelter > div {
    padding: 10px;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    border-radius: 0 0 var(--border-radius-1) var(--border-radius-1);
  }

  .card-pet > div {
    background-color: var(--grey-4);
    color: var(--color-primary-1);
  }

  .card-pet__tags {
    display: flex;
    justify-content: space-around;
    width: 90%;
  }

  .card-pet__tags span {
    background-color: var(--color-secondary-1);
    padding: 6px;
    border-radius: var(--border-radius-2);
  }
`;
