import { Banner } from '../components/Banner/style';
import { Header } from '../components/Header';
import HeaderImg from '../assets/homepage.svg';
import { Button } from '../components/Button/styles';
import { PetList } from '../components/PetList';
import { Footer } from '../components/Footer';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Banner>
        <div className='banner-content__div'>
          <img src={HeaderImg} alt='cão e gato onlypets' />
          <div>
            <h2>
              Encontre um amigo, <br />
              <span>AGORA MESMO!</span>
            </h2>
            <Button className='button__color--primary button__size--medium'>
              Quero adotar!
            </Button>
          </div>
        </div>
      </Banner>
      <PetList />
      <Footer />
    </>
  );
};
