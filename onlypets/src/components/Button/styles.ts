import styled from 'styled-components';

export const Button = styled.button`
  height: 38px;
  border-radius: 8px;
  border: none;
  color: var(--white);
  font-size: var(--text-size-3);
  padding: 0 20px;

  &&.button__color--primary {
    background-color: var(--color-primary-1);

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }

  &&.button__color--grey {
    background-color: var(--grey-0);

    &:hover {
      background-color: var(--grey-1);
    }
  }

  &&.button__color--yellow {
    background-color: var(--color-secondary-1);
    color: var(--color-primary-2);

    &:hover {
      background-color: var(--color-secondary-hover);
    }
  }

  &&.button__size--large {
    width: 90%;
    max-width: 330px;
  }
  &&.button__size--medium {
    width: 90%;
    max-width: 240px;
  }
  &&.button__size--small {
    width: 90%;
    max-width: 121px;
  }
`;
