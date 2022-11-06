import { Player } from '@lottiefiles/react-lottie-player';
import { Register } from '../Register';
import { Background, ModalDiv, ModalRegisterStyled } from './styles';
import { Context } from '../../contexts/user';
import { useContext } from 'react';

export const ModalRegister = () => {
  const { handleModalRegister } = useContext(Context);
  return (
    <Background onClick={handleModalRegister}>
      <ModalRegisterStyled onClick={(event) => event.stopPropagation()}>
        <ModalDiv>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src='https://assets3.lottiefiles.com/temp/lf20_tsdGdl.json'
            style={{ height: '350px', width: '90%' }}
          ></Player>
          <h2>Bem Vindo!</h2>
          <p>
            Seja bem vindo ao OnlyPets, o site onde você encontra o seu melhor
            amigo e ainda ajuda abrigos na sua luta diária contra o abandono de
            animais.
          </p>
          <p>Faça seu cadastro e aproveite!</p>
        </ModalDiv>
        <Register />
      </ModalRegisterStyled>
    </Background>
  );
};
