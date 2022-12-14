import { StyledHeader } from './style';
import PublicLogo from '../../assets/public-logo.svg';
import StrictLogo from '../../assets/strict-logo.svg';
import { Button } from '../Button/styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../contexts/user';
import { useNavigate } from 'react-router-dom';
import { PetContext } from '../../contexts/PetContext';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const {
    handleModalLogin,
    handleModalRegister,
    editProfile,
    user,
    logout,
    handeModalListPets,
    handleModalAddPet,
  } = useContext(Context);
  const { handlePets, setEditPet, reloadPets } = useContext(PetContext);

  function handleClick() {
    setOpen(!open);
  }

  const navigate = useNavigate();

  const contentRef: React.MutableRefObject<any> = useRef();

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
    <StyledHeader>
      {user ? (
        <div className='header-container with-user'>
          <img src={StrictLogo} alt='Logo OnlyPets' />
          <span onClick={handleClick} className='header-container__profile'>
            {`${user.user}`}
            {user.image != null && (
              <img src={user.image} alt='Foto de Perfil' />
            )}
          </span>
          {open ? (
            <ul className='header-container__menu' role='menu' ref={contentRef}>
              <li
                onClick={() => {
                  user.shelter === 'true'
                    ? navigate(`/dashboard`)
                    : navigate(`/home/`);
                  handleClick();
                }}
              >
                Início
              </li>
              <li
                onClick={() => {
                  handeModalListPets();
                  handleClick();
                  handlePets();
                }}
              >
                Ver meus anúncios
              </li>
              <li
                onClick={() => {
                  setEditPet(true);
                  handleClick();
                  handleModalAddPet();
                }}
              >
                Adicionar amigo para adoção
              </li>
              <li
                onClick={() => {
                  editProfile();
                  handleClick();
                }}
              >
                Editar perfil
              </li>
              <li
                onClick={() => {
                  reloadPets();
                  logout();
                  handleClick();
                }}
              >
                Sair
              </li>
            </ul>
          ) : null}
        </div>
      ) : (
        <div className='header-container'>
          <img src={PublicLogo} alt='Logo OnlyPets' />
          <div className='header-container__butons'>
            <Button
              type='button'
              className='button__color--yellow button__size--small'
              onClick={handleModalLogin}
            >
              Logar
            </Button>
            <Button
              type='button'
              className='button__color--primary button__size--small'
              onClick={handleModalRegister}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      )}
    </StyledHeader>
  );
};
