import { createContext, useContext, useEffect, useState } from 'react';
import { instance } from '../services/instance';
import { toast } from 'react-toastify';
import { Context } from './user';
import { iAddPets } from '../components/AddPets';

interface iProviderProps {
  children: React.ReactNode;
}
export interface iPets {
  title: string;
  content: string;
  contact: string;
  temperament: string;
  size: string;
  age: string;
  type: string;
  city: string;
  castrated: string;
  vaccinated: string;
  sex: string;
  userId: string;
  img: string;
  id?: number;
}

interface iPetsProvider {
  pets: iPets[] | null | undefined;
  filterPets: iPets[] | null | undefined;
  setFilterPets: React.Dispatch<
    React.SetStateAction<iPets[] | null | undefined>
  >;
  getPets: () => Promise<void>;
  postPets: (obj: iAddPets) => Promise<void>;
  editPets: (obj: iAddPets) => Promise<void>;
  deletePets: (petId: number) => Promise<void>;
  specificPet: (petId: number) => Promise<void>;
  onlyPet: iPets | null | undefined;
  setOnlyPet: React.Dispatch<React.SetStateAction<iPets | null | undefined>>;
  editPetValue: iPets | null | undefined;
  setEditPetValue: React.Dispatch<
    React.SetStateAction<iPets | null | undefined>
  >;
  handlePets(): void;
  editPet: boolean;
  setEditPet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PetContext = createContext({} as iPetsProvider);

export const PetProvider = ({ children }: iProviderProps) => {
  const [pets, setPets] = useState<iPets[] | null | undefined>(null);
  const [filterPets, setFilterPets] = useState<iPets[] | null | undefined>(
    null
  );
  const [onlyPet, setOnlyPet] = useState<iPets | null | undefined>(null);
  const [editPetValue, setEditPetValue] = useState<iPets | null | undefined>(
    null
  );
  const [editPet, setEditPet] = useState(false);
  const token = localStorage.getItem('@TOKEN: ONLYPETS');
  const { user } = useContext(Context);
  const sucessPost = () => {
    toast.success('Animal cadastrado com sucesso!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const failPost = () => {
    toast.error('Falha ao publicar!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const sucessEdit = () => {
    toast.success('Animal editado com sucesso!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const failEdit = () => {
    toast.error('Falha ao editar!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const sucessDelete = () => {
    toast.success('Animal removido!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const getPets = async () => {
    try {
      const { data } = await instance.get<iPets[]>('pets');
      setPets(data);
      setFilterPets(data);
      console.log(pets);
    } catch (error) {
      console.log(error);
    }
  };
  const postPets = async (obj: iAddPets) => {
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await instance.post<iAddPets>('pets', obj);
      sucessPost();
    } catch (error) {
      failPost();
      console.log(error);
    }
  };
  const editPets = async (obj: iAddPets) => {
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await instance.patch<iAddPets>('pets', obj);
      console.log(data);
      sucessEdit();
    } catch (error) {
      failEdit();
      console.log(error);
    }
  };
  const deletePets = async (petId: number) => {
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      await instance.delete(`pets/${petId}`);
      sucessDelete();
      setFilterPets(filterPets?.filter((pet) => pet.id !== petId));
      setPets(pets?.filter((pet) => pet.id !== petId));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const specificPet = async (petId: number) => {
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await instance.get(`pets/${petId}`);
      setOnlyPet(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePets = () => {
    const filter = pets?.filter((elem) => elem.userId === user?.id?.toString());
    setFilterPets(filter);
  };
  useEffect(() => {
    const loadPets = async () => {
      try {
        const { data } = await instance.get<iPets[]>('pets');
        setPets(data);
        setFilterPets(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadPets();
  }, []);

  return (
    <>
      <PetContext.Provider
        value={{
          getPets,
          postPets,
          editPets,
          deletePets,
          specificPet,
          pets,
          filterPets,
          setFilterPets,
          onlyPet,
          setOnlyPet,
          handlePets,
          editPet,
          setEditPet,
          editPetValue,
          setEditPetValue,
        }}
      >
        {children}
      </PetContext.Provider>
    </>
  );
};
