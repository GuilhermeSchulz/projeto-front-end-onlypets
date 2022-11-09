/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { PetContext } from '../../contexts/PetContext';
import { Button } from '../Button/styles';
import { Container, DataPet } from './style';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const ProfilePet = () => {
  const { specificPet, onlyPet } = useContext(PetContext);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    specificPet(Number(id));
  }, []);

  console.log(onlyPet);

  return (
    <Container>
      <img src={onlyPet?.img} alt='pet' />
      <DataPet>
        <div className='header'>
          <h1>{onlyPet?.title}</h1>
          <p>{onlyPet?.age}</p>
          <span>{onlyPet?.content}</span>
        </div>
        <div className='details'>
          <div>
            <h2>Vacinação:</h2>
            <p>{onlyPet?.vaccinated ? 'Sim' : 'Pendente'}</p>
          </div>
          <div>
            <h2>Castração:</h2>
            <p>{onlyPet?.castrated ? 'Castrado' : 'Não Castrado'}</p>
          </div>
          <div>
            <h2>Porte:</h2>
            <p>{onlyPet?.size}</p>
          </div>
          <div className='tag'>
            <span>{onlyPet?.temperament}</span>
          </div>
          <Button className='button__color--primary'>Quero Adotar!</Button>
          <Button
            className='button__color--primary'
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </Button>
        </div>
      </DataPet>
    </Container>
  );
};
