import { StyledUl, StyledUlTitle } from '../List/style';
import { iPets, PetContext } from '../../contexts/PetContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export const PetList = () => {
  const { filterPets } = useContext(PetContext);
  const navigate = useNavigate();
  return (
    <>
      <StyledUlTitle>Conheça o seu amigo!</StyledUlTitle>
      <StyledUl>
        {filterPets !== null &&
          filterPets?.map((elem: iPets) => {
            return (
              <li className='card card-pet' onClick={() =>{navigate(`/pets/${elem.id}`)}} key={elem.id}>
                <img src={elem.img} alt={'Animal: ' + elem.title} />
                <div>
                  <h3>{elem.title}</h3>
                  <div className='card-pet__tags'>
                    {/* <span>{elem.sex}</span> */}
                    <span>{elem.temperament}</span>
                    <span>{elem.age}</span>
                  </div>
                </div>
              </li>
            );
          })}
      </StyledUl>
    </>
  );
};
