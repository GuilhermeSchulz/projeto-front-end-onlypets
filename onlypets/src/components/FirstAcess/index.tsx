import { FirstAcessModal } from './styles';
import '../../styles/inputs.css';
import '../../styles/text.css';
import { Button } from '../Button/styles';

export const FirstAcess = () => {
  return (
    <FirstAcessModal>
      <form>
        <h3 className='form__title'>
          Para completar o perfil precisamos de mais informações
        </h3>
        <div>
          <div className='column'>
            <label className='form__label' htmlFor='address'>
              Endereço:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='address'
              placeholder='Digite seu endereço'
            />
            <label className='form__label' htmlFor='image'>
              Imagem de perfil:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='image'
              placeholder='URL da sua foto de perfil'
            />
          </div>
          <div className='column'>
            <label className='form__label' htmlFor='contact'>
              Contato:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='contact'
              placeholder='Melhor forma de entrar em contato!'
            />
            <label className='form__label' htmlFor='whichAnimal'>
              Qual tipo do animal?:
            </label>
            <select className='inputsPattern form__select' id='whichAnimal'>
              <option value='gato'>Gato</option>
              <option value='cão'>Cachorro</option>
            </select>
          </div>
        </div>

        <h3>Diga-nos o que você busca em um amigo!</h3>

        <select
          className='inputsPattern form__select'
          id='temperament'
        ></select>

        <Button className='form__btn'>Enviar</Button>
      </form>
    </FirstAcessModal>
  );
};
