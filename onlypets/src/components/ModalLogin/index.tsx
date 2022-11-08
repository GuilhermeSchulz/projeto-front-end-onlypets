import { Login } from '../Login';
import { Background, ModalDiv, ModalLoginStyled, StyledPlayer } from './styles';
import { Context } from '../../contexts/user';
import { useContext } from 'react';

export const ModalLogin = () => {
  const { handleModalLogin } = useContext(Context);

  return (
    <Background onClick={handleModalLogin}>
      <ModalLoginStyled onClick={(event) => event.stopPropagation()}>
        <ModalDiv>
          <span onClick={handleModalLogin}>X</span>
          <StyledPlayer
            autoplay={true}
            loop={true}
            controls={false}
            src='https://assets4.lottiefiles.com/temp/lf20_l0ORt3.json'
            style={{ height: '350px', width: '90%' }}
          ></StyledPlayer>
          <h2>Bem Vindo!</h2>
          <p>
            Seja bem vindo ao OnlyPets, o site onde você encontra o seu melhor
            amigo e ainda ajuda abrigos na sua luta diária contra o abandono de
            animais.
          </p>
          <p>Faça seu login e aproveite!</p>
        </ModalDiv>
        <Login />
      </ModalLoginStyled>
    </Background>
  );
};
