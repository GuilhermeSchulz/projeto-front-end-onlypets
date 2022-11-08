import { useContext } from 'react';
import ImgBanner from '../assets/img-banner-userPage.svg';
import { BannerImage } from '../components/Banner/style';
import { Button } from '../components/Button/styles';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PetList } from '../components/PetList';
import { ReportsForm } from '../components/ReportsForm';
import { ShelterList } from '../components/ShelterList';
import { Context } from '../contexts/user';
import '../styles/specificPositions.css';

export const UserPage = () => {
  const { openModalReports, setOpenModalReports } = useContext(Context);

  return (
    <>
      <Header />
      <BannerImage>
        <div>
          <img src={ImgBanner} alt='Cão e gato onlypets' />
        </div>
        <Button
          onClick={() => setOpenModalReports(true)}
          className='position__Reports--btn'
        >
          Denunciar maus - tratos
        </Button>
      </BannerImage>
      <div>
        <PetList />
      </div>
      <div>
        <ShelterList />
      </div>
      <Footer />
      {openModalReports ? <ReportsForm /> : null}
    </>
  );
};
