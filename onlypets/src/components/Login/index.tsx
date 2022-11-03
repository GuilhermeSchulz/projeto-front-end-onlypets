import { useForm } from 'react-hook-form';
import { Button } from '../Button/styles';
import { Container } from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledFieldInput } from '../Inputs/styles';


interface ILogin{
    email: string,
    password: string
}

const schema = yup.object({
    email: yup.string().required('O campo Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
})

export const Login = () => {
    const { register,  handleSubmit,  formState:{errors} } = useForm<ILogin>({
        resolver: yupResolver(schema)
    })

    function loginUser (event:any){
        event.preventDefault();
    }
    

    return (

        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(loginUser)}>
                
                <StyledFieldInput>
                    Email:
                    <input id='email' type='email' placeholder='Digite o seu email...' {...register('email')} />
                    <span>{errors.email?.message}</span>
                </StyledFieldInput>

                <StyledFieldInput>
                    Senha:
                    <input id='password' type='password' placeholder='Digite a sua senha...' {...register('password')} />
                    <span>{errors.password?.message}</span>
                </StyledFieldInput>

                <div className="button">
                    <Button className="button__color--primary">Logar</Button>
                    <Button className="button__color--grey">Quero me cadastrar</Button>
                </div>
            </form>
        </Container>
    );
}