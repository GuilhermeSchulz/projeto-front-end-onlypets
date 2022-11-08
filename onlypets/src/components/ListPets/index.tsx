import { ListPetsModal } from './styles';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { SlClose } from 'react-icons/sl';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { Context } from '../../contexts/user';

export const ListPets = () => {
  const { handleModalPetsShelter } = useContext(Context)
  const [option, setOption] = useState(false);

  const openOptions = () => {
    !option ? setOption(true) : setOption(false);
  }



  return (
    <ListPetsModal>
      <section>
        <h3 className='form__title'>
          Aqui estão os animaizinhos que você cadastrou
        </h3>
        <SlClose onClick={handleModalPetsShelter} className='icon' size={20} />
        <ul>
          <li>
            <h4>Godofredo</h4>
            <p>Cachorro</p>
            <HiOutlineDotsCircleHorizontal
              onClick={() => openOptions()}
              size={25}
              className='circleOption'
            />
            {option ? (
              <div className='option__div'>
                <span>Editar</span>
                <span>Visulaizar</span>
                <span>Excluir</span>
              </div>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </section>
    </ListPetsModal>
  );
};
