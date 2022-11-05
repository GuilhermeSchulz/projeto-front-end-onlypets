import { Button } from '../Button/styles';
import { StyledUl } from '../List/style';

const shelters = [
  {
    email: 'abrigo@mail.com',
    password: '$2a$10$US4f97kasyMuHK1OGQlRqujRDUYNC5ndDnUfAjsmzN1QuAsKmFqUC',
    shelter: 'true',
    id: 4,
    user: 'AbrigoCarinho',
    imgProfile:
      'https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg?w=740&t=st=1667247062~exp=1667247662~hmac=923d799b201a7b0cd1880697afae9d4a3aa2ff26df6909037b813aa93f2be244',
    contact: 'abrigo@mail.com',
    adress: 'Rua São Luiz, 42',
  },
  {
    email: 'shelter@mail.com',
    password: '$2a$10$Ow0f9yZkhGMWFHiuXBEtmeBKpMJpIh/Zpe/UInD8tpLQv4N3DMrbi',
    shelter: 'true',
    id: 5,
    user: 'CasaDaMaeJoana',
    imgProfile:
      'https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg?w=740&t=st=1667247062~exp=1667247662~hmac=923d799b201a7b0cd1880697afae9d4a3aa2ff26df6909037b813aa93f2be244',
    contact: 'abrigo@mail.com',
    adress: 'Rua São Luiz, 42',
  },
  {
    email: 'abrigo@mail.com',
    password: '$2a$10$US4f97kasyMuHK1OGQlRqujRDUYNC5ndDnUfAjsmzN1QuAsKmFqUC',
    shelter: 'true',
    id: 4,
    user: 'AbrigoCarinho',
    imgProfile:
      'https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg?w=740&t=st=1667247062~exp=1667247662~hmac=923d799b201a7b0cd1880697afae9d4a3aa2ff26df6909037b813aa93f2be244',
    contact: 'abrigo@mail.com',
    adress: 'Rua São Luiz, 42',
  },
  {
    email: 'shelter@mail.com',
    password: '$2a$10$Ow0f9yZkhGMWFHiuXBEtmeBKpMJpIh/Zpe/UInD8tpLQv4N3DMrbi',
    shelter: 'true',
    id: 5,
    user: 'CasaDaMaeJoana',
    imgProfile:
      'https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg?w=740&t=st=1667247062~exp=1667247662~hmac=923d799b201a7b0cd1880697afae9d4a3aa2ff26df6909037b813aa93f2be244',
    contact: 'abrigo@mail.com',
    adress: 'Rua São Luiz, 42',
  },
  {
    email: 'abrigo@mail.com',
    password: '$2a$10$US4f97kasyMuHK1OGQlRqujRDUYNC5ndDnUfAjsmzN1QuAsKmFqUC',
    shelter: 'true',
    id: 4,
    user: 'AbrigoCarinho',
    imgProfile:
      'https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg?w=740&t=st=1667247062~exp=1667247662~hmac=923d799b201a7b0cd1880697afae9d4a3aa2ff26df6909037b813aa93f2be244',
    contact: 'abrigo@mail.com',
    adress: 'Rua São Luiz, 42',
  },
  {
    email: 'shelter@mail.com',
    password: '$2a$10$Ow0f9yZkhGMWFHiuXBEtmeBKpMJpIh/Zpe/UInD8tpLQv4N3DMrbi',
    shelter: 'true',
    id: 5,
    user: 'CasaDaMaeJoana',
    imgProfile:
      'https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg?w=740&t=st=1667247062~exp=1667247662~hmac=923d799b201a7b0cd1880697afae9d4a3aa2ff26df6909037b813aa93f2be244',
    contact: 'abrigo@mail.com',
    adress: 'Rua São Luiz, 42',
  },
];

export const ShelterList = () => {
  return (
    <StyledUl>
      {shelters.map((elem) => {
        return (
          <li className='card card-shelter' id={elem.id + ''}>
            <img src={elem.imgProfile} alt={'foto de perfil: ' + elem.user} />
            <div>
              <h3>{elem.user}</h3>
              <Button className='button__color--yellow'>Acessar</Button>
            </div>
          </li>
        );
      })}
    </StyledUl>
  );
};
