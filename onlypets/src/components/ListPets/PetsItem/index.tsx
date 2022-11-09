import { useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { PetContext } from '../../../contexts/PetContext';
import { Context } from '../../../contexts/user';
import { StyledPetItem } from './styles';

export const PetsItem = ({ elem }: any) => {
  const [open, setOpen] = useState<React.SetStateAction<boolean>>(false);
  const { setEditPet, setEditPetValue, deletePets, setFilterPets, filterPets } =
    useContext(PetContext);
  const { handleModalAddPet } = useContext(Context);

  const contentRef: React.MutableRefObject<any> = useRef();

  const navigate = useNavigate();

  const openMenu = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
    setEditPet(false);
    setEditPetValue(elem);
    handleModalAddPet();
  };

  const handleDelete = () => {
    deletePets(Number(elem.id));
    setFilterPets(filterPets?.filter((pet) => pet.id !== elem.id));
  };

  useEffect(() => {
    const handleOutclick = (evt: any) => {
      const target = evt.target;
      !contentRef.current?.contains(target) && setOpen(false);
    };

    document.addEventListener('mousedown', handleOutclick);

    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  }, []);

  return (
    <StyledPetItem key={elem.id}>
      <p>{elem.title}</p>
      <p>{elem.type}</p>
      <HiOutlineDotsCircleHorizontal
        onClick={openMenu}
        size={25}
        className='circle__option'
      />
      {open ? (
        <ul id={elem.id} ref={contentRef} className='option__ul'>
          <li onClick={() => handleEdit()}>Editar</li>
          <li onClick={() => navigate(`/pets/${elem.id}`)}>Visualizar</li>
          <li onClick={() => handleDelete()}>Excluir</li>
        </ul>
      ) : null}
    </StyledPetItem>
  );
};
