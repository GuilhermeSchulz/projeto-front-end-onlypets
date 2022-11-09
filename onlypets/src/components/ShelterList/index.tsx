import { Button } from '../Button/styles';
import { StyledUl, StyledUlTitle } from '../List/style';
import { Context } from '../../contexts/user';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const ShelterList = () => {
  const { shelters } = useContext(Context);
  const filteredShelters = shelters?.filter((elem) => elem.shelter === 'true');
  const navigate = useNavigate();
  return (
    <>
      <StyledUlTitle>Conheça os nossos abrigos parceiros!</StyledUlTitle>
      <StyledUl>
        {filteredShelters?.map((elem, index) => {
          return (
            <li key={index} className='card card-shelter' id={elem.id + ''}>
              <img src={elem.image} alt={'foto de perfil: ' + elem.user} />
              <div>
                <h3>{elem.user}</h3>
                <Button
                  className='button__color--yellow'
                  onClick={() => {
                    navigate(`/shelter/${elem.id}`);
                  }}
                >
                  Acessar
                </Button>
              </div>
            </li>
          );
        })}
      </StyledUl>
    </>
  );
};
