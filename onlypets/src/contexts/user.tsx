import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { instance } from '../services/instance';

interface iUserProviderProps {
  children: ReactNode;
}

interface iUserProviderContext {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  registerUser({
    email,
    password,
    shelter,
  }: iRegisterUserArgs): Promise<iUser | void>;
  login(body: iLoginArgs): Promise<iUser | void>;
  shelters: iUser[] | null;
  filteredShelters: iUser[] | null;
  setFilteredShelters: Dispatch<SetStateAction<iUser[] | null>>;
}

interface iRegisterUserArgs {
  email: string;
  password: string;
  shelter: boolean;
}

interface iUserPreferences {
  temperament: string;
  size: string;
  age: number;
  type: string;
  city: string;
}

interface iUser {
  id: string;
  shelter: boolean;
  email: string;
  imgProfile?: string;
  contact?: string;
  preferences?: iUserPreferences;
}

interface iLoginArgs {
  email: string;
  password: string;
}

interface iUserResponse {
  user: iUser;
  token: string;
}

export const Context = createContext<iUserProviderContext>(
  {} as iUserProviderContext
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [shelters, setShelters] = useState<iUser[] | null>(null);
  const [filteredShelters, setFilteredShelters] = useState<iUser[] | null>(
    null
  );

  async function registerUser(body: iRegisterUserArgs): Promise<iUser | void> {
    try {
      setLoading(true);
      const { data } = await instance.post<iUser>('register', body);
      toast.success('Usuário criado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return data;
    } catch (error) {
      console.error(error);
      toast.error('Email já cadastrado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  }

  async function login(body: iLoginArgs): Promise<iUser | void> {
    try {
      setLoading(true);
      const { data } = await instance.post<iUserResponse>('login', body);
      setUser(data.user);
      localStorage.setItem('@TOKEN: ONLYPETS', data.token);
      toast.success('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //redirecionamento
    } catch (error) {
      console.error(error);
      toast.error('Combinação de email/senha errada!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN: ONLYPETS');

    async function getShelters(): Promise<void> {
      if (token) {
        try {
          const { data } = await instance.get<iUser[]>('users');
          const shelters = data.filter((elem) => elem.shelter === true);
          setShelters(shelters);
        } catch (error) {
          console.error(error);
        }
      }
    }

    getShelters();
  }, [shelters]);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        registerUser,
        login,
        shelters,
        filteredShelters,
        setFilteredShelters,
      }}
    >
      {children}
    </Context.Provider>
  );
};
