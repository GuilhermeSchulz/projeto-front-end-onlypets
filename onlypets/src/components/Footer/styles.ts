import styled from 'styled-components';
import FooterImage from '../../assets/footer.svg';

export const StyledFooter = styled.footer`
  background-image: url(${FooterImage});
  background-color: var(--color-secondary-1);
  padding: 30px 0 70px 0;

  h2 {
    text-align: center;
    font-size: var(--title-size-2);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .container__box-footer {
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    gap: 30px;
  }

  .container__box-footer img {
    width: 30%;
    max-width: 300px;
    min-width: 300px;
  }

  .container__box-footer::-webkit-scrollbar {
    display: none;
  }
`;
