/* eslint-disable react-hooks/exhaustive-deps */

import { Header } from '../../components/Header';
import { PetList } from '../../components/PetList';
import { BannerImage, DivStyled } from './styles';
import { iUser } from '../../contexts/user';
import { useContext, useEffect, useState } from 'react';
import { PetContext } from '../../contexts/PetContext';
import BannerImg from '../../assets/img-shelter-page.svg';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../services/instance';
import { Button } from '../../components/Button/styles';

export const ShelterPage = () => {
  const { filterPets, setFilterPets, pets } = useContext(PetContext);
  const [shelter, setShelter] = useState<iUser | null>(null);

  const { id } = useParams();

  const navigate = useNavigate();
  const back = () => {
    setFilterPets(pets);
    navigate(-1);
  };
  useEffect(() => {
    const token = localStorage.getItem('@TOKEN: ONLYPETS');
    const handlePets = () => {
      const filter = filterPets?.filter((elem) => elem.userId === id);
      setFilterPets(filter);
    };
    async function getShelter(): Promise<void> {
      if (token !== null) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get<iUser>(`users/${id}`);

          setShelter(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getShelter();
    handlePets();
  }, []);

  console.log(filterPets);
  return (
    <>
      <Header />
      <BannerImage>
        <img src={BannerImg} alt='' />
      </BannerImage>
      <DivStyled>
        <h2>{shelter?.user}</h2>
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
        <Button className='button__color--yellow' onClick={back}>
          Voltar
        </Button>
      </DivStyled>
      {filterPets && filterPets?.length > 0 ? <PetList /> : null}
    </>
  );
};
