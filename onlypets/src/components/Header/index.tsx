import { StyledHeader } from './style';
import PublicLogo from '../../assets/public-logo.svg';
import StrictLogo from '../../assets/strict-logo.svg';
import { Button } from '../Button/styles';
import { useContext, useState } from 'react';
import { Context } from '../../contexts/user';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { handleModalLogin, handleModalRegister, user } = useContext(Context);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <StyledHeader>
      {user ? (
        <div className='header-container with-user'>
          <img src={StrictLogo} alt='Logo OnlyPets' />
          <span onClick={handleClick} className='header-container__profile'>
            Usuário
            <img src={user.imgProfile} alt='Foto de Perfil' />
          </span>
          {open ? (
            <ul className='header-container__menu' role='menu'>
              <li>Início</li>
              <li>Ver meus anúncios</li>
              <li>Adicionar amigo para adoção</li>
              <li>Editar perfil</li>
              <li>Sair</li>
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
