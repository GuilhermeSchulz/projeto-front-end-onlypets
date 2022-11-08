import { Banner } from '../components/Banner/style';
import { Header } from '../components/Header';
import HeaderImg from '../assets/homepage.svg';
import { Button } from '../components/Button/styles';
import { PetList } from '../components/PetList';
import { Footer } from '../components/Footer';
import { ModalLogin } from '../components/ModalLogin';
import { Context } from '../contexts/user';
import { useContext } from 'react';
import { ModalRegister } from '../components/ModalRegister';
import { PetContext } from '../contexts/PetContext';

export const Homepage = () => {
  const { showModalLogin, handleModalLogin, showModalRegister } =
    useContext(Context);

  const {filterPets} = useContext(PetContext)
  console.log(filterPets)

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
            <Button
              className='button__color--primary button__size--medium'
              onClick={handleModalLogin}
            >
              Quero adotar!
            </Button>
          </div>
        </div>
      </Banner>
      <div>
        <PetList />
      </div>
      <Footer />
      {showModalLogin && <ModalLogin />}
      {showModalRegister && <ModalRegister />}
    </>
  );
};
