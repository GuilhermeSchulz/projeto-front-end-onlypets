import { Player } from '@lottiefiles/react-lottie-player'
import { Register } from '../Register'
import { Background, ModalDiv, ModalRegisterStyled } from './styles'


export const ModalRegister = () => {
    return(
        <Background>
            <ModalRegisterStyled>
                <ModalDiv>
                    <Player
                        autoplay={true}
                        loop={true}
                        controls={false}
                        src='https://assets3.lottiefiles.com/temp/lf20_tsdGdl.json'
                        style={{ height: '350px', width: '350px'}}>
                    </Player>
                    <h2>Bem Vindo!</h2>
                    <p>Seja bem vindo ao OnlyPets, o site onde você encontra o seu melhor amigo e ainda ajuda abrigos na sua luta diária contra o abandono de animais.</p>
                    <p>Faça seu cadastro e aproveite!</p>
                </ModalDiv>
                <Register />
            </ModalRegisterStyled>
        </Background>
    )
}