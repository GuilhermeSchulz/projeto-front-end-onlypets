import { useContext, useEffect } from "react";
import { PetContext } from "../../contexts/PetContext";
import { Button } from "../Button/styles";
import { Container, DataPet, Image } from "./style";

export const ProfilePet = () => {
    const { specificPet, filterPets } = useContext(PetContext);

  
    useEffect( () => {
         specificPet(1);
    },[]);

  console.log(filterPets)

    return(
        <Container>
            <Image>
                {<img src={filterPets?.img} alt="pet" />}
            </Image>
            <DataPet>
                <div className="header">
                    <h1>{filterPets?.title}</h1>
                    <p>{filterPets?.age}</p>
                    <span>{filterPets?.content}</span>
                </div>
                <div className="details">
                    <div>
                        <h2>Vacinação:</h2>
                        <p>{filterPets?.vaccinated? "Sim" : "Pendente"}</p>
                    </div>
                    <div>
                        <h2>Castração:</h2>
                        <p>{filterPets?.castrated? "Castrado" : "Não Castrado"}</p>
                    </div>
                    <div>
                        <h2>Porte:</h2>
                        <p>{filterPets?.size}</p>
                    </div>
                    <div className="tag">
                        <span>{filterPets?.temperament}</span>
                        <span>{filterPets?.sex}</span>
                    </div>
                    <Button className="button__color--primary">Quero Adotar!</Button>
                </div>
            </DataPet>
        </Container>
    );
}