import styled from 'styled-components';

export const ListPetsModal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-opacity);

  .div_containerModal {
    width: 100%;
    max-width: 750px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    background-color: var(--color-secondary-1);
    border-radius: var(--border-radius-1);
    padding: 40px 20px;
    position: relative;
  }

  h3 {
    text-align: center;
  }

  h4 {
    width: 33%;
  }

  .ul__items {
    width: 90%;
    height: 90%;
    padding: 40px 18px 120px;
    background-color: var(--color-primary-1);
    border-radius: var(--border-radius-2);
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-x: auto;
  }

  .circleOption {
    color: var(--color-primary-1);
    cursor: pointer;
  }
`;
