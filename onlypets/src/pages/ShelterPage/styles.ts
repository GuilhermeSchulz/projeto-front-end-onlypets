import styled from 'styled-components';

export const BannerImage = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivStyled = styled.div`
  width: 100%;
  max-width: 1300px;

  padding: 0 16px;
  margin: 0 auto;
  margin-bottom: 100px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  h2 {
    color: var(--color-primary-1);
  }

  p {
    color: var(--black);
  }
`;

export const DivReports = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 100px;

  h2 {
    color: var(--color-primary-1);
  }
`;
