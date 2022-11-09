import styled from 'styled-components';

export const StyledReportsForm = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--black-opacity);

  position: fixed;
  top: 0;
  left: 0;

  div {
    align-items: center;
    justify-content: center;
    gap: 39px;

    background-color: #ee6f84;

    width: 100%;
    max-width: 320px;

    padding: 40px;

    border-radius: var(--border-radius-1);

    position: fixed;

    animation: showModal 1s ease;
  }

  h3 {
    font-size: var(--text-size-1);
    margin-bottom: 18px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      p {
        color: var(--color-secondary-1);
        font-size: var(--text-size-3);
        margin-bottom: 8px;
        margin-top: -4px;
      }
    }
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      top: -10%;
    }
    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      top: 28%;
    }
  }
`;
