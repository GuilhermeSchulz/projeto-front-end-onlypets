import { Button } from '../../components/Button/styles';
import { Header } from '../../components/Header';
import { PetList } from '../../components/PetList';
import { ReportsList } from '../../components/ReportsList';
import { BannerImage, DivReports, DivStyled } from './styles';
import { Context } from '../../contexts/user';
import { useContext } from 'react';
import { AddPets } from '../../components/AddPets';
import { ListPets } from '../../components/ListPets';
import { PetContext } from '../../contexts/PetContext';
import BannerImg from '../../assets/img-shelter-page.svg';

export const ShelterPage = () => {
  const {
    showModalAddPet,
    handleModalAddPet,
    showModalPetsShelter,
    handleModalPetsShelter,
  } = useContext(Context);

  const { filterPets, setFilterPets } = useContext(PetContext);

  const handlePets = () => {
    const filter = filterPets?.filter((elem) => elem.userId == 1);
    setFilterPets(filter);
  };

  return (
    <>
      <Header />
      <BannerImage>
        <img src={BannerImg} alt='' />
      </BannerImage>
      <DivStyled>
        <h2>Abrigo dos pets!</h2>
        <p>
          Somos uma organização sem fins lucrativos que busca trazer um pouco de
          alegria para humanos através da adoção de animais que foram
          abandonados ou sofreram maus-tratos. Servimos como um lar temporário
          dos nossos amiguinhos antes que eles encontrem a felicidade de ter um
          novo lar e uma nova família. <br />
          Nosso abrigo tem como principal propósito dar uma nova vida para
          nossos amigos de quatro patas que foram resgatados. Nosso trabalho é
          voluntário e cuidamos dos nossos amigos com todo o carinho e amor.
          Temos um ambiente seguro para eles e buscamos novos donos que possam
          oferecer a mesma segurança e carinho para nossos animais. <br />
          Atuando há alguns anos como defensores e protetores da causa animal,
          nosso abrigo cuida de animais que de alguma forma foram negligenciados
          por seus antigos donos. Sempre buscamos o bem-estar de nossos
          amiguinhos e também amigos humanos que possam dar o mesmo bem-estar a
          eles em seus lares.
        </p>
        <Button
          className='button__size--large button__color--primary'
          onClick={handleModalPetsShelter}
        >
          Ver animais!
        </Button>
      </DivStyled>
      <PetList />
      <DivReports>
        <h2>Denuncias</h2>
        <ReportsList />
      </DivReports>
      {showModalAddPet && <AddPets />}
      {showModalPetsShelter && <ListPets />}
    </>
  );
};
