import styled from 'styled-components';

export const StyledFieldInput = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: var(--text-size-2);
  color: var(--black);

  input,
  select {
    height: 38px;
    width: 300px;
    border: var(--color-primary-1) 1px solid;
    color: var(--color-primary-hover);
    padding-left: 5px;
    border-radius: 4px;

    &::placeholder {
      color: var(--color-primary-1);
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
      border-color: var(--color-primary-hover);
    }
  }

  .input--small {
    width: 240px;
  }

  .input--large {
    width: 240px;
    height: 68px;
  }
`;
