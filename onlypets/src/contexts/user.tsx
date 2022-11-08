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
import { useNavigate } from 'react-router-dom';
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
  showModalAddPet: boolean;
  handleModalAddPet(): void;
  showModalPetsShelter: boolean;
  handleModalPetsShelter(): void;
  showModalListPets: boolean;
  setShowModalListPets: Dispatch<SetStateAction<boolean>>;
  openModalReports: boolean;
  setOpenModalReports: Dispatch<SetStateAction<boolean>>;
  logout(): void;
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

export interface iUser {
  id: string;
  shelter: string;
  email: string;
  imgProfile?: string;
  contact?: string;
  preferences?: iUserPreferences;
  user: string;
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
  const [shelters, setShelters] = useState<iUser[] | null>(null);
  const [filteredShelters, setFilteredShelters] = useState<iUser[] | null>(
    null
  );
  const [openModalReports, setOpenModalReports] = useState(false);
  const [showModalListPets, setShowModalListPets] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalAddPet, setShowModalAddPet] = useState(false);
  const [showModalPetsShelter, setShowModalPetsShelter] = useState(false);
  console.log(user);
  const navigate = useNavigate();

  function handleModalLogin() {
    setShowModalLogin(!showModalLogin);
  }

  function handleModalRegister() {
    setShowModalRegister(!showModalRegister);
  }
  //setar estado de mostrar modal de completar o cadastro

  function handleModalAddPet() {
    setShowModalAddPet(!showModalAddPet);
  }

  function handleModalPetsShelter() {
    setShowModalPetsShelter(!showModalPetsShelter);
  }

  async function registerUser(body: iRegisterUserArgs): Promise<iUser | void> {
    try {
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
      setShowModalRegister(false);
      setShowModalLogin(true);
    }
  }

  async function login(body: iLoginArgs): Promise<iUser | void> {
    try {
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
      data.user.shelter === "true"
        ? navigate(`/dashboard/${data.user.id}`)
        : navigate(`/home/${data.user.id}`);
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


          setShelters(data);
        } catch (error) {
          console.error(error);
        }
      }
    }

    getShelters();
  }, []);
  const logout = () => {
    localStorage.clear();
    setUser(null)
    navigate('/');
  };
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
        showModalAddPet,
        handleModalAddPet,
        showModalPetsShelter,
        handleModalPetsShelter,
        showModalListPets,
        setShowModalListPets,
        openModalReports,
        setOpenModalReports,
        logout
      }}
    >
      {children}
    </Context.Provider>
  );
};
