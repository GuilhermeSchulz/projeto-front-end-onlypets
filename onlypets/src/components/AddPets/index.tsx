import '../../styles/inputs.css';
import '../../styles/text.css';
import '../../styles/closeIcon.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../Button/styles';
import { AddPetsModal } from './styles';
import { SlClose } from 'react-icons/sl';
import { useContext } from 'react';
import { Context } from '../../contexts/user';
import { PetContext } from '../../contexts/PetContext';

export interface iAddPets {
  title: string;
  castrated: string;
  temperament: string;
  size: string;
  age: string;
  vaccinated: string;
  type: string;
  img: string;
  content: string;
  userId?: string;
}

export const AddPets = () => {
  const { handleModalAddPet, user } = useContext(Context);
  const { postPets, editPet, editPets, editPetValue, setEditPetValue } =
    useContext(PetContext);
  const schema = yup.object({
    title: yup.string().required('Campo obrigatório!'),
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
    img: yup.string().required('Campo obrigatório!'),
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
    editPet
      ? postPets({ ...data, userId: user?.id?.toString() })
      : editPets({ ...data, userId: user?.id?.toString() });
  };

  return (
    <AddPetsModal>
      <form onSubmit={handleSubmit(onSubmit)}>
        {editPet ? (
          <h3 className='form__title'>Adicione um amigo em busca de dono!</h3>
        ) : (
          <h3 className='form__title'>Edite as informações do seu amigo!</h3>
        )}

        <SlClose
          onClick={() => {
            handleModalAddPet();
            setEditPetValue(null);
          }}
          className='icon'
          size={20}
        />
        <div>
          <div className='column'>
            <label className='form__label' htmlFor='title'>
              Nome:
            </label>
            <input
              className='inputsPattern'
              type='text'
              id='title'
              value={editPetValue ? editPetValue.title : undefined}
              placeholder='Digite seu nome'
              {...register('title')}
            />
            <p className='form__label form__label--error'>
              {errors.title?.message}
            </p>

            <label className='form__label' htmlFor='castrated'>
              Castração:
            </label>
            <select
              className='inputsPattern form__select'
              id='castrated'
              value={editPetValue ? editPetValue.castrated : undefined}
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
              value={editPetValue ? editPetValue.temperament : undefined}
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
              value={editPetValue ? editPetValue.size : undefined}
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
              value={editPetValue ? editPetValue.age : undefined}
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
              value={editPetValue ? editPetValue.vaccinated : undefined}
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
              value={editPetValue ? editPetValue.type : undefined}
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
              id='img'
              value={editPetValue ? editPetValue.img : undefined}
              placeholder='URL da sua foto de perfil'
              {...register('img')}
            />
            <p className='form__label form__label--error'>
              {errors.img?.message}
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
          value={editPetValue ? editPetValue.content : undefined}
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
