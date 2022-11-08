import { ListPetsModal } from './styles';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { SlClose } from 'react-icons/sl';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { Context } from '../../contexts/user';
import useOutClick from '../../hooks/useOutClick';

export const ListPets = () => {
  const [option, setOption] = useState(false);

  const openOptions = () => {
    !option ? setOption(true) : setOption(false);
  };

  const { showModalListPets, setShowModalListPets } = useContext(Context);

  const refModal = useOutClick(() => {
    setShowModalListPets(false);
  });

  const refDiv = useOutClick(() => {
    setOption(false);
  });

  return (
    <ListPetsModal>
      <section ref={refModal}>
        <h3 className='form__title'>
          Aqui estão os animaizinhos que você cadastrou
        </h3>
        <SlClose
          className='icon'
          size={20}
          onClick={() => setShowModalListPets(!showModalListPets)}
        />
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
              <div className='option__div' ref={refDiv}>
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
