import { StyledHeader } from './style';
import PublicLogo from '../../assets/public-logo.svg';
import StrictLogo from '../../assets/strict-logo.svg';
import { Button } from '../Button/styles';
import { useContext, useState } from 'react';
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
  const { handlePets, setEditPet } = useContext(PetContext);
  function handleClick() {
    setOpen(!open);
  }

  const navigate = useNavigate();

  return (
    <StyledHeader>
      {user ? (
        <div className='header-container with-user'>
          <img src={StrictLogo} alt='Logo OnlyPets' />
          <span onClick={handleClick} className='header-container__profile'>
            {`${user.user}`}
            {user.imgProfile != null && (
              <img src={user.imgProfile} alt='Foto de Perfil' />
            )}
          </span>
          {open ? (
            <ul className='header-container__menu' role='menu'>
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