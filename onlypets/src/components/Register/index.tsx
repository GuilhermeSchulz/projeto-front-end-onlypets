import { useForm } from 'react-hook-form';
import { Button } from '../Button/styles';
import { Container } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledFieldInput } from '../Inputs/styles';
import { Context } from '../../contexts/user';
import { useContext, useEffect } from 'react';

interface IRegister {
  user: string;
  email: string;
  shelter: boolean;
  password: string;
}

const schema = yup.object({
  user: yup.string().required('O campo Nome Completo é obrigatório').min(3),
  email: yup.string().required('O campo Email é obrigatório'),
  password: yup
    .string()
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
    .required('Senha é obrigatória'),
});

export const Register = () => {
  const { handleModalLogin, handleModalRegister, registerUser } =
    useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <Container>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(registerUser)}>
        <StyledFieldInput>
          Nome Completo:
          <input
            id='user'
            type='text'
            placeholder='Digite o seu nome...'
            {...register('user')}
          />
          <span>{errors.user?.message}</span>
        </StyledFieldInput>

        <StyledFieldInput>
          Email:
          <input
            id='email'
            type='email'
            placeholder='Digite o seu email...'
            {...register('email')}
          />
          <span>{errors.email?.message}</span>
        </StyledFieldInput>
        <StyledFieldInput>
          Abrigo:
          <select id='shelter' {...register('shelter')}>
            <option value='' disabled>
              É um abrigo?
            </option>
            <option value='true'>Sim</option>
            <option value='false'>Não</option>
          </select>
          <span>{errors.email?.message}</span>
        </StyledFieldInput>

        <StyledFieldInput>
          Senha:
          <input
            id='password'
            type='password'
            placeholder='Digite a sua senha...'
            {...register('password')}
          />
          <span>{errors.password?.message}</span>
        </StyledFieldInput>

        <div className='button'>
          <Button className='button__color--primary' type='submit'>
            Cadastrar
          </Button>
          <Button
            className='button__color--grey'
            onClick={() => {
              handleModalRegister();
              handleModalLogin();
            }}
          >
            Voltar ao Login
          </Button>
        </div>
      </form>
    </Container>
  );
};
