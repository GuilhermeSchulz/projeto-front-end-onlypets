import styled from 'styled-components';
import footer from '../../assets/footer.svg';

export const Banner = styled.div`
  width: 100%;
  height: 575px;
  background-image: url(${footer});
  background-color: var(--color-secondary-1);
  padding: 30px 0;
  margin-bottom: 30px;

  .banner-content__div {
    width: 90%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
  }

  .banner-content__div img {
    height: 350px;
  }

  .banner-content__div h2 {
    font-size: var(--title-size-3);
  }

  .banner-content__div h2 > span {
    font-size: var(--title-size-2);
  }

  .banner-content__div div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 850px) {
    && {
      height: 470px;
    }

    .banner-content__div {
      flex-direction: row;
      justify-content: center;
      gap: 70px;
    }

    .banner-content__div div {
      justify-content: center;
    }
  }

  @media (min-width: 1024px) {
    && {
      height: 600px;
    }

    .banner-content__div img {
      height: 500px;
    }

    .banner-content__div h2 {
      font-size: var(--title-size-2);
    }

    .banner-content__div h2 > span {
      font-size: var(--title-size-1);
    }
  }
`;

export const BannerImage = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
