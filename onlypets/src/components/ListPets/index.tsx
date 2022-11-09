import { ListPetsModal } from './styles';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { SlClose } from 'react-icons/sl';
import { AiFillEdit, AiFillEye, AiFillDelete } from 'react-icons/ai';
import { useContext } from 'react';
import { Context } from '../../contexts/user';
import useOutClick from '../../hooks/useOutClick';
import { PetContext } from '../../contexts/PetContext';
import { useNavigate } from 'react-router-dom';

export const ListPets = () => {


  const { handeModalListPets, handleModalAddPet } = useContext(Context);
  const { filterPets, setFilterPets, pets, setEditPet,setEditPetValue, deletePets } = useContext(PetContext);
  const refModal = useOutClick(() => {
    handeModalListPets();
  });

  const resetPets = () => {
    setFilterPets(pets)
  }
  const navigate = useNavigate()
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
            handeModalListPets()
            resetPets()
          }}
        />
        <ul>
          {filterPets?.map((elem) => {
            return (
              <li key={elem.id}>
                <h4>{elem.title}</h4>
                <p>{elem.type}</p>
                <div className='buttons__div'>
                  <span onClick={() => {
                    setEditPet(false)
                    setEditPetValue(elem)
                    handleModalAddPet()
                  }}><AiFillEdit/></span>
                  <span onClick={() => {
                      navigate(`/pets/${elem.id}`)
                  }}><AiFillEye/></span>
                  <span onClick={() => {
                    deletePets(Number(elem.id))
                    setFilterPets(filterPets?.filter(pet => pet.id !== elem.id))
                  }}><AiFillDelete/></span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </ListPetsModal>
  );
};
