/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '../components/Header';
import { BannerImage } from '../components/Banner/style';
import BannerImg from '../assets/shelter-dashboard.svg';
import { StyledUlTitle } from '../components/List/style';
import { PetList } from '../components/PetList';
import { ReportsList } from '../components/ReportsList';
import { ShelterDiv } from '../components/ShelterDescription/style';
import { ReportsModal } from '../components/ReportsList/ReportsModal/';
import { useContext, useEffect } from 'react';
import { ReportsContext } from '../contexts/ReportsContext';
import { ListPets } from '../components/ListPets';
import { AddPets } from '../components/AddPets';
import { FirstAcess } from '../components/FirstAcess';
import { Context } from '../contexts/user';
import Loading from '../components/Loading';
import { PetContext } from '../contexts/PetContext';

export const Dashboard = () => {
  const { isModalOpen, reports } = useContext(ReportsContext);
  const {
    showModalListPets,
    showModalAddPet,
    showModalFirstAccess,
    loading,
    user,
  } = useContext(Context);
  const { setFilterPets, pets } = useContext(PetContext);

  useEffect(() => {
    const getShelterPets = () => {
      const filter = pets?.filter(
        (elem) => elem.userId === user?.id?.toString()
      );
      setFilterPets(filter);
    };
    getShelterPets();
  }, [user]);

  return (
    <div>
      <Header />
      <BannerImage>
        <div className='banner-content__div--img'>
          <img src={BannerImg} alt='cão onlypets' />
        </div>
      </BannerImage>
      <ShelterDiv>
        <StyledUlTitle>Abrigo dos pets!</StyledUlTitle>
        <p>
          Somos uma organização sem fins lucrativos que busca trazer um pouco de
          alegria para humanos através da adoção de animais que foram
          abandonados ou sofreram maus-tratos. Servimos como um lar temporário
          dos nossos amiguinhos antes que eles encontrem a felicidade de ter um
          novo lar e uma nova família.
        </p>
      </ShelterDiv>
      <PetList />

      <>
        <StyledUlTitle>Denuncias:</StyledUlTitle>
        {!loading && <Loading />}
        {reports ? <ReportsList /> : null}
      </>

      {showModalListPets ? <ListPets /> : null}
      {showModalAddPet ? <AddPets /> : null}
      {showModalFirstAccess ? <FirstAcess /> : null}
      {isModalOpen && <ReportsModal />}
    </div>
  );
};
