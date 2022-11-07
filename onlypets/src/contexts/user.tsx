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
  showModalLogin: boolean;
  setShowModalLogin: Dispatch<SetStateAction<boolean>>;
  handleModalLogin(): void;
  showModalRegister: boolean;
  setShowModalRegister: Dispatch<SetStateAction<boolean>>;
  handleModalRegister(): void;
  showModalListPets: boolean;
  setShowModalListPets: Dispatch<SetStateAction<boolean>>;
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
  accessToken: string;
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
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalListPets, setShowModalListPets] = useState(false);
  function handleModalLogin() {
    setShowModalLogin(!showModalLogin);
  }

  function handleModalRegister() {
    setShowModalRegister(!showModalRegister);
  }
  //setar estado de mostrar modal de completar o cadastro

  async function registerUser(body: iRegisterUserArgs): Promise<iUser | void> {
    try {
      setLoading(true);
      const { data } = await instance.post<iUser>('register', body);
      toast.success('Usuário criado com sucesso!', {
        position: 'bottom-right',
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
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
      setShowModalRegister(false);
      setShowModalLogin(true);
    }
  }

  async function login(body: iLoginArgs): Promise<iUser | void> {
    try {
      setLoading(true);
      const { data } = await instance.post<iUserResponse>('login', body);
      setUser(data.user);
      localStorage.setItem('@TOKEN: ONLYPETS', data.accessToken);
      console.log(data);
      toast.success('Login realizado com sucesso!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //redirecionamento
      //setar estado de mostrar modal de completar o cadastro
    } catch (error) {
      console.error(error);
      toast.error('Combinação de email/senha errada!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
      setShowModalLogin(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN: ONLYPETS');

    async function getShelters(): Promise<void> {
      if (token !== null) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
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
        showModalLogin,
        setShowModalLogin,
        handleModalLogin,
        showModalRegister,
        setShowModalRegister,
        handleModalRegister,
        showModalListPets,
        setShowModalListPets,
      }}
    >
      {children}
    </Context.Provider>
  );
};
