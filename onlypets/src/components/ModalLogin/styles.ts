import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-opacity);
  z-index: 1;
  position: fixed;
  top: 0;
`;

export const ModalLoginStyled = styled.div`
  display: flex;
  width: 800px;
  height: 90%;
  max-height: 600px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;

  &&::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    width: min-content;
  }
`;

export const ModalDiv = styled.div`
  width: 50%;
  min-width: 300px;
  height: 100%;
  background: var(--color-secondary-1);
  border-right: 1px solid var(--color-primary-1);
  padding: 30px;
  border-radius: 5px 0 0 5px;
  color: var(--color-primary-2);
  display: flex;
  flex-direction: column;

  h2 {
    font-size: var(--title-size-1);
    text-align: center;
    margin-top: -30px;
  }

  p {
    margin-top: 20px;
    font-size: var(--text-size-2);
  }

  span {
    visibility: hidden;
    color: black;
    align-self: end;
    margin-right: -25px;
    margin-top: -25px;
    cursor: pointer;
    padding: 10px;
    z-index: 20;
  }

  @media (max-width: 900px) {
    && {
      width: 60%;
      top: 0;
      border-right: none;
      border-radius: 5px 5px 0 0;
      margin-top: 525px;
    }

    p {
      margin-bottom: -20px;
    }

    span {
      visibility: visible;
    }
  }
`;
export const StyledPlayer = styled(Player)`
  transform: scale(1.5);
`;
