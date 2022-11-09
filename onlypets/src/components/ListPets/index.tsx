import { ListPetsModal } from './styles';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { SlClose } from 'react-icons/sl';
import { useContext } from 'react';
import { Context } from '../../contexts/user';
import useOutClick from '../../hooks/useOutClick';
import { iPets, PetContext } from '../../contexts/PetContext';
import { PetsItem } from './PetsItem';

export const ListPets = () => {
  const { handeModalListPets } = useContext(Context);

  const { filterPets, setFilterPets, pets } = useContext(PetContext);

  const refModal = useOutClick(() => {
    handeModalListPets();
  });

  const resetPets = () => {
    setFilterPets(pets);
  };

  return (
    <ListPetsModal>
      <div className='div_containerModal' ref={refModal}>
        <h3 className='form__title'>
          Aqui estão os animaizinhos que você cadastrou
        </h3>
        <SlClose
          className='icon'
          size={20}
          onClick={() => {
            handeModalListPets();
            resetPets();
          }}
        />
        <ul className='ulItems'>
          {filterPets?.map((elem: iPets) => (
            <PetsItem key={elem.id} elem={elem} />
          ))}
        </ul>
      </div>
    </ListPetsModal>
  );
};
