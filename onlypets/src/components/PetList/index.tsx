import { StyledUl, StyledUlTitle } from '../List/style';
import { iPets, PetContext } from '../../contexts/PetContext';
import { useContext } from 'react';

export const PetList = () => {
  const { pets } = useContext(PetContext);
  return (
    <>
      <StyledUlTitle>Conheça o seu amigo!</StyledUlTitle>
      <StyledUl>
        {pets !== null &&
          pets.map((elem: iPets) => {
            return (
              <li className='card card-pet' key={elem.id}>
                <img src={elem.img} alt={'Animal: ' + elem.title} />
                <div>
                  <h3>{elem.title}</h3>
                  <div className='card-pet__tags'>
                    <span>{elem.sex}</span>
                    <span>{elem.temperament}</span>
                    <span>{'idade: ' + elem.age}</span>
                  </div>
                </div>
              </li>
            );
          })}
      </StyledUl>
    </>
  );
};
