import styled from 'styled-components';

export const StyledReportsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 293px;
  padding: 16px;
  gap: 8px;
  margin: 48px auto;

  background-color: var(--color-primary-1);
  border-radius: var(--border-radius-1);

  .no-reports {
    width: 100%;
    padding: 8px;

    background-color: var(--grey-4);
    border-radius: var(--border-radius-1);

    font-weight: var(--text-weight-1);
    font-size: var(--text-size-2);
    text-align: center;
  }

  @media (min-width: 580px) {
    width: 90%;
    max-width: 1300px;
  }
`;
