import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  img {
    height: 55px;
  }

  .header-container {
    padding: 10px 0 20px 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1300px;
  }

  .header-container__butons {
    display: flex;
    justify-content: space-between;
    width: 275px;
  }

  .with-user {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }

  .header-container__profile {
    background-color: var(--color-secondary-1);
    font-size: var(--text-size-2);
    font-weight: var(--text-weight-1);
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 60px;
  }

  .header-container__profile img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .header-container__menu {
    background-color: var(--color-secondary-1);
    display: block;
    position: absolute;
    width: 200px;
    right: 0;
    top: 65px;
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
