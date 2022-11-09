import { FirstAcessModal } from './styles';
import '../../styles/inputs.css';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { Button } from '../Button/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Context } from '../../contexts/user';
import { useContext } from 'react';
import { SlClose } from 'react-icons/sl';

export interface iFirstAcess {
  address: string;
  image: string;
  contact: string;
  type: string;
  temperament: string;
  size: string;
  age: string;
  city: string;
}

export const FirstAcess = () => {
  const schema = yup.object({
    address: yup.string().required('Campo obrigatório!'),
    image: yup.string().required('Campo obrigatório!'),
    contact: yup.string().required('Campo obrigatório!'),
    type: yup
      .string()
      .required('É necessário escolher um tipo de animal!')
      .nullable(),
    temperament: yup
      .string()
      .required('É necessário escolher um temperamento!')
      .nullable(),
    size: yup.string().required('É necessário escolher um tamanho!').nullable(),
    age: yup.string().required('É necessário escolher uma idade!').nullable(),
    city: yup.string().required('Campo obrigatório!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFirstAcess>({
    resolver: yupResolver(schema),
  });
  const {editFirsAccess, editProfile} = useContext(Context)
  const onSubmit = (data: iFirstAcess) => {
    console.log(data)
    editFirsAccess(data);
  };

  return (
    <FirstAcessModal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className='form__title'>
          Para completar o perfil precisamos de mais informações
        </h3>

        <SlClose onClick={editProfile} className='icon' size={20} />

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
              {...register('address')}
            />
            <p className='form__label form__label--error'>
              {errors.address?.message}
            </p>

            <label className='form__label' htmlFor='image'>
              Imagem de perfil:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='image'
              placeholder='URL da sua foto de perfil'
              {...register('image')}
            />
            <p className='form__label form__label--error'>
              {errors.image?.message}
            </p>
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
              {...register('contact')}
            />
            <p className='form__label form__label--error'>
              {errors.contact?.message}
            </p>

            <label className='form__label' htmlFor='whichAnimal'>
              Qual tipo do animal?:
            </label>
            <select
              className='inputsPattern form__select'
              id='type'
              {...register('type')}
            >
              <option value='gato'>Gato</option>
              <option value='cão'>Cachorro</option>
            </select>
            <p className='form__label form__label--error'>
              {errors.type?.message}
            </p>
          </div>
        </div>

        <h3 className='form__title'>Diga-nos o que você busca em um amigo!</h3>

        <div>
          <div className='column'>
            <label className='form__label' htmlFor='temperament'>
              Escolha o temperamento?:
            </label>
            <select
              className='inputsPattern form__select'
              id='temperament'
              {...register('temperament')}
            >
              <option value='Se da bem com outros pets'>
                Se da bem com outros pets
              </option>
              <option value='Não se da bem com outros pets'>
                Não se da bem com outros pets
              </option>
              <option value='Enérgico'>Enérgico</option>
              <option value='Calmo'>Calmo</option>
              <option value='Dócil'>Dócil</option>
              <option value='Territorialista'>Territorialista</option>
            </select>
            <p className='form__label form__label--error'>
              {errors.temperament?.message}
            </p>

            <label className='form__label' htmlFor='size'>
              Qual é o tamanho?:
            </label>
            <select
              className='inputsPattern form__select'
              id='size'
              {...register('size')}
            >
              <option value='Pequeno'>Pequeno</option>
              <option value='Médio'>Médio</option>
              <option value='Grande'>Grande</option>
            </select>
            <p className='form__label form__label--error'>
              {errors.size?.message}
            </p>
          </div>

          <div className='column'>
            <label className='form__label' htmlFor='age'>
              Qual a idade do animal?:
            </label>
            <select
              className='inputsPattern form__select'
              id='age'
              {...register('age')}
            >
              <option value='Filhote'>Filhote - até 1 ano</option>
              <option value='Jovem'>Jovem - até 4 anos</option>
              <option value='Adulto'>Adulto - até 8 anos</option>
              <option value='Idoso'>Idoso - acima de 8 anos</option>
            </select>
            <p className='form__label form__label--error'>
              {errors.age?.message}
            </p>

            <label className='form__label' htmlFor='city'>
              Cidade:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='city'
              placeholder='Digite o nome da cidade'
              {...register('city')}
            />
            <p className='form__label form__label--error'>
              {errors.city?.message}
            </p>
          </div>
        </div>

        <Button className='form__btn' type='submit'>
          Enviar
        </Button>
      </form>
    </FirstAcessModal>
  );
};
