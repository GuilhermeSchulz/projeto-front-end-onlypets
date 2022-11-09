/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { instance } from '../services/instance';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import { iFirstAcess } from '../components/FirstAcess';
import { PetContext } from './PetContext';
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
  showModalFirstAccess: boolean;
  setShowModalFirstAccess: Dispatch<SetStateAction<boolean>>;
  setShowModalAddPet: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  editFirsAccess: (body: iFirstAcess) => Promise<void>;
  handeModalListPets(): void;
  editProfile(): void;
  editInfos: boolean;
  setEditInfos:Dispatch<SetStateAction<boolean>>;
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
  address?: string;
  temperament?:string;
  type?:string;
  size?: string;
  age?:string;
  city?:string;
}

interface iLoginArgs {
  email: string;
  password: string;
}

interface iUserResponse {
  user: iUser;
  accessToken: string;
}

// interface iJWT {
//   email: string;
//   sub: string;
// }

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
  const [showModalFirstAccess, setShowModalFirstAccess] = useState(false);
  const [editInfos, setEditInfos] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getPets } = useContext(PetContext);
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
    if (showModalAddPet === false) {
      getPets();
    }
  }
  function handeModalListPets() {
    setShowModalListPets(!showModalListPets);
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
      localStorage.setItem('@ID: ONLYPETS', data.user.id);
      toast.success('Login realizado com sucesso!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      data.user.hasOwnProperty('adress') === false
        ? setShowModalFirstAccess(true)
        : setShowModalFirstAccess(false);
      data.user.shelter === 'true'
        ? navigate(`/dashboard/`)
        : navigate(`/home/`);

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
      setLoading(true);
    }
  }
  const editProfile = () => {
    setShowModalFirstAccess(!showModalFirstAccess);
  };

  const editFirsAccess = async (body: iFirstAcess) => {
    const token = localStorage.getItem('@TOKEN: ONLYPETS');
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await instance.patch<iUserResponse>(
        `users/${user?.id}`,
        body
      );
      // setUser(data.user);
      setShowModalFirstAccess(false);

      toast.success('Perfil completo com sucesso!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
      toast.error('Falha ao completar perfil!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN: ONLYPETS');
    const id = localStorage.getItem('@ID: ONLYPETS');
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

    async function reloadUser(): Promise<void> {
      if (token !== null) {
        // const jwt: iJWT = jwtDecode(token);
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get<iUser>(`users/${id}`);
          setUser(data);
          data.shelter === 'true'
            ? navigate(`/dashboard/`)
            : navigate(`/home/`);
        } catch (error) {
          console.error(error);
          localStorage.clear();
          navigate('/');
        } finally {
          setLoading(true);
        }
      }
    }
    reloadUser();
    getShelters();
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
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
        logout,
        showModalFirstAccess,
        setShowModalFirstAccess,
        loading,
        setLoading,
        editFirsAccess,
        setShowModalAddPet,
        handeModalListPets,
        editProfile,
        editInfos,
        setEditInfos
      }}
    >
      {children}
    </Context.Provider>
  );
};
