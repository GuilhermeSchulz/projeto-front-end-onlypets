import styled from 'styled-components';

export const StyledReportsModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--black-opacity);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  top: 0;

  .modal {
    align-items: center;
    justify-content: center;
    background-color: #ee6f84;
    padding: 32px 32px 16px;
    width: 300px;
    border-radius: var(--border-radius-1);
    gap: 39px;

    h1 {
      font-size: var(--text-size-1);
    }

    section {
      padding: 16px 0;

      .modal--text {
        margin-bottom: 16px;
      }

      .dark--text {
        font-weight: var(--text-weight-1);
      }
    }
  }
`;
