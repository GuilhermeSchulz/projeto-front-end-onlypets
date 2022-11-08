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

  ul {
    width: 90%;
    height: 90%;
    min-height: 350px;

    padding: 18px;

    background-color: var(--color-primary-1);

    border-radius: var(--border-radius-2);

    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: space-between;

    background-color: var(--grey-3);

    border-radius: var(--border-radius-2);

    position: relative;
  }

  .circleOption {
    color: var(--color-primary-1);
    cursor: pointer;
  }

  .option__div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 8px;

    background-color: var(--color-secondary-1);

    border-radius: var(--border-radius-2);

    position: absolute;
    top: 40px;
    right: 10px;

    animation: showOption 1s ease;

    z-index: 1;
  }

  .option__div::after {
    content: '';
    width: 15px;
    height: 15px;

    display: block;

    position: absolute;
    bottom: 85px;
    right: 25px;

    transform: skew(-15deg, -25deg);

    background-color: var(--color-secondary-1);
  }

  span {
    border-bottom: 1px solid var(--color-primary-1);
    text-align: end;
  }

  @keyframes showOption {
    0% {
      opacity: 0;
      top: 10%;
    }
    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      top: 90%;
    }
  }
`;
