import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { instance } from '../services/instance';
import { Context } from './user';

interface iReportsProviderProps {
  children: ReactNode;
}

export interface iReports {
  userId: string;
  title: string;
  description: string;
  adress: string;
  city: string;
  id: number;
}

interface iReportsRegister {
  adress: string;
  description: string;
}

export interface iReportsResponse {
  userId: string;
  title: string;
  description: string;
  adress: string;
}

export interface iReportsContext {
  getReports(): Promise<void>;
  submitReport(data: iReportsRegister): Promise<void>;
  openModal(): void;
  isModalOpen: boolean;
  closeModal(): void;
  reports: iReports[] | null | undefined;
  setReports: React.Dispatch<
    React.SetStateAction<iReports[] | null | undefined>
  >;
  deleteReport(id: number): void;
  editReport(id: number, data: iEditReport): Promise<void>;
  dataModal: iReports | null;
  setDataModal: React.Dispatch<React.SetStateAction<iReports | null>>;
}

interface iEditReport {
  title: string;
  description: string;
}

interface iEditResponse {
  userId: string;
  title: string | null;
  description: string;
  id: number;
}

export const ReportsContext = createContext({} as iReportsContext);

export const ReportsProvider = ({ children }: iReportsProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reports, setReports] = useState([] as iReports[] | null | undefined);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState<iReports | null>(null);

  const { user, setOpenModalReports, setLoading } = useContext(Context);
  const token = localStorage.getItem('@TOKEN: ONLYPETS');
  const openModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const getReports = async (): Promise<void> => {
    const token = localStorage.getItem('@accessToken');

    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await instance.get<iReports[]>('reports');
      setReports(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  const submitReport = async (data: iReportsRegister): Promise<void> => {
    try {
      const body = { ...user, ...data };

      const dataTreated = {
        userId: body.id + '',
        title: body.title,
        description: body.description,
        adress: body.adress,
      };

      await instance.post<iReportsResponse>('reports', dataTreated);
      toast.success('Denúncia criada com sucesso!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setOpenModalReports(false);
    } catch (error) {
      toast.error('Ops não foi possível cadastrar sua denúncia!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(error);
    }
  };

  const deleteReport = async (id: number): Promise<void> => {
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      await instance.delete<void>(`reports/${id}`);
      setReports(reports?.filter((report) => report.id !== id));
      toast.success('Denúncia deletada com sucesso!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('Ops algo deu errado!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(error);
    }
  };

  const editReport = async (id: number, data: iEditReport): Promise<void> => {
    try {
      const edit = await instance.patch<iEditResponse>(`reports/${id}`, data);
      console.log(edit);
      toast.success('Denúncia editada com sucesso!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('Ops algo deu errado!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN: ONLYPETS');
    async function getReports(): Promise<void> {
      if (token !== null) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get<iReports[]>('reports');
          setReports(data);
          setIsModalOpen(false);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getReports();
  }, []);

  return (
    <ReportsContext.Provider
      value={{
        getReports,
        submitReport,
        openModal,
        isModalOpen,
        closeModal,
        reports,
        deleteReport,
        editReport,
        setReports,
        dataModal,
        setDataModal,
      }}
    >
      {children}
    </ReportsContext.Provider>
  );
};
