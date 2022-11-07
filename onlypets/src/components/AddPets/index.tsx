import '../../styles/inputs.css';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../Button/styles';
import { AddPetsModal } from './styles';
import { SlClose } from 'react-icons/sl';

interface iAddPets {
  name: string;
  castrated: string;
  temperament: string;
  size: string;
  age: string;
  vaccinated: string;
  type: string;
  url: string;
  content: string;
}

export const AddPets = () => {
  const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    castrated: yup
      .string()
      .required('É necessário escolher uma opção!')
      .nullable(),
    temperament: yup
      .string()
      .required('É necessário escolher um temperamento!')
      .nullable(),
    size: yup.string().required('É necessário escolher um tamanho!').nullable(),
    age: yup.string().required('É necessário escolher uma idade!').nullable(),
    vaccinated: yup
      .string()
      .required('É necessário escolher uma opção!')
      .nullable(),
    type: yup
      .string()
      .required('É necessário escolher um tipo de animal!')
      .nullable(),
    url: yup.string().required('Campo obrigatório!'),
    content: yup.string().required('Campo obrigatório!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAddPets>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: iAddPets) => {
    console.log(data);
  };

  return (
    <AddPetsModal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className='form__title'>Adicione um amigo em busca de dono!</h3>

        <SlClose className='icon' size={20} />
        <div>
          <div className='column'>
            <label className='form__label' htmlFor='name'>
              Nome:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='name'
              placeholder='Digite seu nome'
              {...register('name')}
            />
            <p className='form__label form__label--error'>
              {errors.name?.message}
            </p>

            <label className='form__label' htmlFor='castrated'>
              Castração:
            </label>
            <select
              className='inputsPattern form__select'
              id='castrated'
              {...register('castrated')}
            >
              <option value='Sim'>Sim</option>
              <option value='Não'>Não</option>
            </select>
            <p className='form__label form__label--error'>
              {errors.castrated?.message}
            </p>

            <label className='form__label' htmlFor='temperament'>
              Selecione o temperamento:
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
              Porte:
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
              Idade:
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

            <label className='form__label' htmlFor='vaccinated'>
              Vacinação:
            </label>
            <select
              className='inputsPattern form__select'
              id='vaccinated'
              {...register('vaccinated')}
            >
              <option value='Sim'>Sim</option>
              <option value='Não'>Não</option>
            </select>
            <p className='form__label form__label--error'>
              {errors.vaccinated?.message}
            </p>

            <label className='form__label' htmlFor='type'>
              Tipo:
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

            <label className='form__label' htmlFor='url'>
              Foto:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='url'
              placeholder='URL da sua foto de perfil'
              {...register('url')}
            />
            <p className='form__label form__label--error'>
              {errors.url?.message}
            </p>
          </div>
        </div>
        <label className='form__label' htmlFor='content'>
          Informações adicionais:
        </label>
        <textarea
          className='inputsPattern inputsPattern--textarea'
          id='content'
          placeholder='Digite informações sobre o pet!'
          {...register('content')}
        ></textarea>
        <p className='form__label form__label--error'>
          {errors.content?.message}
        </p>
        <Button className='form__btn' type='submit'>
          Enviar
        </Button>
      </form>
    </AddPetsModal>
  );
};
