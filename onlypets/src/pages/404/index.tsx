import { Player } from "@lottiefiles/react-lottie-player"
import { Button } from "../../components/Button/styles"
import { StyledDiv } from "./style"
 
export const ErrorPages = () =>{


    return (
        <StyledDiv>
            <Player
             autoplay={true}
             loop={true}
             controls={false}
             src='https://assets1.lottiefiles.com/packages/lf20_ZJR0xnKKys.json'
             style={{ height: '500px', width: '90%' }}
             >
            </Player>
                <h2>Página não encontrada</h2>
                <Button className="button__color--primary button__size--large"> Voltar</Button>
        </StyledDiv>
    )
}