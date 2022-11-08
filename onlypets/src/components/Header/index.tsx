import { StyledHeader } from './style';
import PublicLogo from '../../assets/public-logo.svg';
import StrictLogo from '../../assets/strict-logo.svg';
import { Button } from '../Button/styles';
import { useContext, useState } from 'react';
import { Context } from '../../contexts/user';

export const Header = () => {
  const user = true;
  const [open, setOpen] = useState(false);
  const { handleModalLogin, handleModalRegister } = useContext(Context);

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
            <img
              src='https://img.freepik.com/fotos-gratis/close-de-um-gatinho-ruivo-fofo-olhando-para-a-camera-isolada-em-uma-parede-branca_181624-45452.jpg?w=740&t=st=1667448161~exp=1667448761~hmac=9091120f34a23fcdb71ff62601867a3ced363fb2f3e02ffcda67704f44f80894'
              alt='Foto de Perfil'
            />
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
