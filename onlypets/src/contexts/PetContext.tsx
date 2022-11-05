import { createContext, useEffect, useState } from 'react';
import { instance } from '../services/instance';
import { toast } from 'react-toastify';

interface iProviderProps {
  children: React.ReactNode;
}
interface iPets {
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
  userId: number;
  id: number;
}
interface iPetsEdit {
  title?: string;
  content?: string;
  contact?: string;
  temperament?: string;
  size?: string;
  age?: string;
  type?: string;
  city?: string;
  castrated?: string;
  vaccinated?: string;
  userId?: number;
  id?: number;
}
interface iPetsProvider {
  pets: iPets | null;
  filterPets: iPets | null;
  setFilterPets: React.Dispatch<React.SetStateAction<iPets | null>>;
  getPets: () => Promise<void>;
  postPets: (obj: iPets) => Promise<void>;
  editPets: (obj: iPets) => Promise<void>;
  deletePets: (petId: number) => Promise<void>;
  specificPet: (petId: number) => Promise<void>;
}

export const PetContext = createContext({} as iPetsProvider);

export const PetProvider = ({ children }: iProviderProps) => {
  const [pets, setPets] = useState<iPets | null>(null);
  const [filterPets, setFilterPets] = useState<iPets | null>(null);

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
      const { data } = await instance.get<iPets>('pets');
      setPets(data);
      console.log(pets);
    } catch (error) {
      console.log(error);
    }
  };
  const postPets = async (obj: iPets) => {
    try {
      const { data } = await instance.post<iPets>('pets', obj);
      console.log(data);
      sucessPost();
    } catch (error) {
      failPost();
      console.log(error);
    }
  };
  const editPets = async (obj: iPetsEdit) => {
    try {
      const { data } = await instance.patch<iPets>('pets', obj);
      console.log(data);
      sucessEdit();
    } catch (error) {
      failEdit();
      console.log(error);
    }
  };
  const deletePets = async (petId: number) => {
    try {
      await instance.delete(`pets/${petId}`);
      sucessDelete();
    } catch (error) {
      console.log(error);
    }
  };
  const specificPet = async (petId: number) => {
    try {
      const { data } = await instance.get(`pets/${petId}`);
      setFilterPets(data);
      console.log(filterPets);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const loadPets = async () => {
      try {
        const { data } = await instance.get<iPets>('pets');
        setPets(data);
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
        }}
      >
        {children}
      </PetContext.Provider>
    </>
  );
};
