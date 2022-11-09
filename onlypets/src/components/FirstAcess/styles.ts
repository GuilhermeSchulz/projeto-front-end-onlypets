import styled from 'styled-components';

export const FirstAcessModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-opacity);
  z-index: 1;
  position: fixed;
  top: 0;

  form {
    width: 100%;
    max-width: 750px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    background-color: var(--color-secondary-1);
    border-radius: var(--border-radius-1);
    padding: 40px 20px;
    position: relative;
  }

  h3 {
    align-self: center;
    text-align: center;
    max-width: 430px;
  }

  label {
    margin-bottom: -30px;
  }

  input {
    max-width: 330px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 35px;
  }
  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  select {
    max-width: 350px;
    position: relative;
    align-self: center;
  }

  p {
    margin-top: -32px;
  }

  .form__btn {
    width: 100%;
    min-width: 280px;
    max-width: 350px;
    background-color: var(--color-primary-1);
    align-self: center;

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }

  @media (min-width: 580px) {
    form {
      padding: 40px 50px;
    }
  }
`;
