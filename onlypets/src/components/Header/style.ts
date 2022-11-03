import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  img {
    height: 75px;
  }

  .header-container {
    padding: 20px 0;
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .header-container__butons {
    display: flex;
    justify-content: space-between;
    width: 275px;
  }

  .with-user {
    flex-direction: row;
    justify-content: space-between;
  }

  .header-container__profile {
    background-color: var(--color-secondary-1);
    font-size: var(--title-size-3);
    font-weight: var(--text-weight-1);
    width: 279px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .header-container__profile img {
    height: 65px;
    width: 65px;
    border-radius: 50%;
    object-fit: cover;
  }

  .header-container__menu {
    background-color: var(--color-secondary-1);
    display: block;
    position: absolute;
    width: 279px;
    right: 5%;
    top: 100px;
    z-index: 10;
    padding: 20px 10px 0px;
    text-align: end;
    border-radius: 0 0 8px 8px;
  }

  .header-container__menu li {
    padding: 12px 0;
    border-bottom: 1px solid #000;
  }

  .header-container__menu li:last-child {
    border: none;
  }

  @media (min-width: 630px) {
    .header-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
