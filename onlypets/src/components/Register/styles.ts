import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  min-width: 300px;
  margin: 10px auto;
  border-radius: 0 5px 5px 0;
  background: var(--color-secondary-1);

  h1 {
    margin: 30px auto;
    font-weight: 700;
  }

  span {
    margin: -5px 0px 10px 0px;
    font-size: 12px;
    color: #ef4545;
  }

  .button {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
  }

  @media (max-width: 900px) {
    && {
      width: 60%;
      border-radius: 0 0 5px 5px;
      margin: 0 auto;
      margin: 0px auto 40px auto;
      padding-bottom: 50px;
    }

    h1 {
      margin: 30px 0 35px 0;
    }

    form {
      width: 90%;
    }
  }
`;
