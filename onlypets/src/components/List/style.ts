import styled from 'styled-components';

export const StyledUlTitle = styled.h2`
  padding: 20px 10px;
  text-align: center;
  font-size: var(--title-size-2);
`;

export const StyledUl = styled.ul`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  overflow-y: auto;
  padding: 50px 0 100px 0;

  .card {
    height: 350px;
    width: 275px;
    min-width: 275px;
    display: flex;
    flex-direction: column;
  }

  .card img {
    object-fit: cover;
    height: 75%;
    min-height: 246px;
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
    height: 105px;
  }

  .card-pet__tags {
    display: flex;
    justify-content: space-around;
    width: 90%;
    overflow-x: auto;
    flex-wrap: nowrap;
    height: max-content;
    gap: 1rem;
  }

  .card-pet__tags span {
    background-color: var(--color-secondary-1);
    padding: 6px;
    border-radius: var(--border-radius-2);
  }
`;
