import { StyledUl, StyledUlTitle } from '../List/style';
const pets = [
  {
    userId: '1',
    title: 'Osvaldo',
    content:
      'Gatinho amoroso busca lar feliz. O Osvaldo é um gato já mais idoso, mas é muito bonzinho. Foi resgatado de maus tratos e estou oferecendo lar temporário enquanto não encontro um tutor tão especial quanto ele. Ele sabe usar a caixinha, é vacinado e vermifugado.',
    contact: 'kenzinho@mail.com',
    temperament: 'dócil',
    size: 'pequeno',
    age: '8',
    type: 'gato',
    city: 'São Paulo',
    sex: 'macho',
    castrated: 'true',
    vaccinated: 'true',
    img: 'https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000',
    id: 1,
  },
  {
    userId: '1',
    title: 'Leão',
    content:
      'O Leão tinha uma familia, mas eles se mudaram e não puderam levar o pet. É um cachorro muito esperto, muito fofo e peludo. Está a procura de um dono.',
    contact: 'kenzinho@mail.com',
    temperament: 'dócil',
    size: 'médio',
    age: '2',
    type: 'cão',
    city: 'São Paulo',
    sex: 'macho',
    castrated: 'true',
    vaccinated: 'true',
    img: 'https://img.freepik.com/fotos-gratis/cachorro-basenji-inteligente-e-amigavel-dando-a-pata-de-perto-isolado-no-branco_346278-1626.jpg?w=740&t=st=1667519718~exp=1667520318~hmac=bb6de297995002fecad723707ac8cb38641c4e1be94aff6e75c6a64ae1ae9721',
    id: 2,
  },
  {
    userId: '2',
    title: 'Batata',
    content:
      'A Batata foi encontrada junto com seus 3 irmãozinhos abandonada em uma caixa, proximo a um lixo. Todos os seus irmão ja foram adotados, mas ela ainda precisa de um lar amoroso!',
    contact: 'teste@mail.com',
    temperament: 'dócil',
    size: 'pequeno',
    age: '0',
    type: 'cão',
    city: 'São Paulo',
    sex: 'fêmea',
    castrated: 'false',
    vaccinated: 'true',
    img: 'https://img.freepik.com/fotos-gratis/cachorro-pequeno-sendo-adoravel-retrato-em-um-estudio_23-2149016948.jpg?w=740&t=st=1667519784~exp=1667520384~hmac=4e5543a58640111efae4b17924c9279dce68956bba5e84269aa66656598a90f3',
    id: 3,
  },
  {
    userId: '1',
    title: 'Osvaldo',
    content:
      'Gatinho amoroso busca lar feliz. O Osvaldo é um gato já mais idoso, mas é muito bonzinho. Foi resgatado de maus tratos e estou oferecendo lar temporário enquanto não encontro um tutor tão especial quanto ele. Ele sabe usar a caixinha, é vacinado e vermifugado.',
    contact: 'kenzinho@mail.com',
    temperament: 'dócil',
    size: 'pequeno',
    age: '8',
    type: 'gato',
    city: 'São Paulo',
    sex: 'macho',
    castrated: 'true',
    vaccinated: 'true',
    img: 'https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000',
    id: 1,
  },
  {
    userId: '1',
    title: 'Leão',
    content:
      'O Leão tinha uma familia, mas eles se mudaram e não puderam levar o pet. É um cachorro muito esperto, muito fofo e peludo. Está a procura de um dono.',
    contact: 'kenzinho@mail.com',
    temperament: 'dócil',
    size: 'médio',
    age: '2',
    type: 'cão',
    city: 'São Paulo',
    sex: 'macho',
    castrated: 'true',
    vaccinated: 'true',
    img: 'https://img.freepik.com/fotos-gratis/cachorro-basenji-inteligente-e-amigavel-dando-a-pata-de-perto-isolado-no-branco_346278-1626.jpg?w=740&t=st=1667519718~exp=1667520318~hmac=bb6de297995002fecad723707ac8cb38641c4e1be94aff6e75c6a64ae1ae9721',
    id: 2,
  },
  {
    userId: '2',
    title: 'Batata',
    content:
      'A Batata foi encontrada junto com seus 3 irmãozinhos abandonada em uma caixa, proximo a um lixo. Todos os seus irmão ja foram adotados, mas ela ainda precisa de um lar amoroso!',
    contact: 'teste@mail.com',
    temperament: 'dócil',
    size: 'pequeno',
    age: '0',
    type: 'cão',
    city: 'São Paulo',
    sex: 'fêmea',
    castrated: 'false',
    vaccinated: 'true',
    img: 'https://img.freepik.com/fotos-gratis/cachorro-pequeno-sendo-adoravel-retrato-em-um-estudio_23-2149016948.jpg?w=740&t=st=1667519784~exp=1667520384~hmac=4e5543a58640111efae4b17924c9279dce68956bba5e84269aa66656598a90f3',
    id: 3,
  },
];

export const PetList = () => {
  return (
    <>
      <StyledUlTitle>Conheça o seu amigo!</StyledUlTitle>
      <StyledUl>
        {pets.map((elem) => {
          return (
            <li className='card card-pet' id={elem.id + ''}>
              <img src={elem.img} alt={'Animal: ' + elem.title} />
              <div>
                <h3>{elem.title}</h3>
                <div className='card-pet__tags'>
                  <span>{elem.sex}</span>
                  <span>{elem.temperament}</span>
                  <span>{'idade: ' + elem.age}</span>
                </div>
              </div>
            </li>
          );
        })}
      </StyledUl>
    </>
  );
};
