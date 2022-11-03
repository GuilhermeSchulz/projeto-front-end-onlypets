import { useForm } from 'react-hook-form';
import { Button } from '../Button/styles';
import { Container } from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledFieldInput } from '../Inputs/styles';


interface IRegister{
    name: string,
    email: string,
    password: string
}

const schema = yup.object({
    name: yup.string().required('O campo Nome Completo é obrigatório').min(3),
    email: yup.string().required('O campo Email é obrigatório'),
    password: yup.string().matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
    .required('Senha é obrigatória')
})

export const Register = () => {
    const { register,  handleSubmit,  formState:{errors} } = useForm<IRegister>({
        resolver: yupResolver(schema)
    })

    function registrauser (event:any){
        event.preventDefault();
    }
    

    return (

        <Container>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(registrauser)}>
                <StyledFieldInput>
                    Nome Completo:
                    <input id='name' type='text' placeholder='Digite o seu nome...' {...register('name')}/>
                    <span>{errors.name?.message}</span>
                </StyledFieldInput>

                <StyledFieldInput>
                    Email:
                    <input id='email' type='email' placeholder='Digite p seu email...' {...register('email')} />
                    <span>{errors.email?.message}</span>
                </StyledFieldInput>

                <StyledFieldInput>
                    Senha:
                    <input id='password' type='password' placeholder='Digite a sua senha...' {...register('password')} />
                    <span>{errors.password?.message}</span>
                </StyledFieldInput>

                <div className="button">
                    <Button className="button__color--primary">Cadastrar</Button>
                    <Button className="button__color--grey">Voltar ao Login</Button>
                </div>
            </form>
        </Container>
    );
}
