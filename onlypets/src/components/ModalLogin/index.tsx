import { Player } from '@lottiefiles/react-lottie-player'
import { Login } from '../Login'
import { Background, ModalDiv, ModalLoginStyled } from './styles'

export const ModalLogin = () => {
    return(
        <Background>
            <ModalLoginStyled>
                <ModalDiv>
                    <Player
                        autoplay={true}
                        loop={true}
                        controls={false}
                        src='https://assets4.lottiefiles.com/temp/lf20_l0ORt3.json'
                        style={{ height: '350px', width: '350px'}}>
                    </Player>
                    <h2>Bem Vindo!</h2>
                    <p>Seja bem vindo ao OnlyPets, o site onde você encontra o seu melhor amigo e ainda ajuda abrigos na sua luta diária contra o abandono de animais.</p>
                    <p>Faça seu login e aproveite!</p>
                </ModalDiv>
                <Login />
            </ModalLoginStyled>
        </Background>
    )
}