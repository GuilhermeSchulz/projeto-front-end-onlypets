import { createContext, ReactNode, useState } from 'react';
import { instance } from '../services/instance';

interface iReportsProviderProps {
  children: ReactNode;
}

interface iReports {
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

interface iReportsResponse {
  userId: number;
  title: string;
  description: string;
  adress: string;
}

export interface iReportsContext {
  getReports(): Promise<void>;
  submitReport(data: iReportsRegister): Promise<void>;
  openModal(): void,
  closeModal(): void,
  reports: iReports[] | null,
  deleteReport(id: number): Promise<void>,
  editReport(id: number, data: iEditReport): Promise<void>
}

interface iEditReport {
  title: string,
  description: string
}

interface iEditResponse {
  userId: string,
  title: string,
  description: string,
  id: number
}

export const ReportsContext = createContext({} as iReportsContext);

export const ReportsProvider = ({ children }: iReportsProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reports, setReports] = useState([
    {
      userId: "1",
      title: "animais passando fome",
      description: "o dono saiu de viagem e deixou os animais passando fome na casa sozinhos",
      adress: "Rua dos Anjos, 290",
      city: "São Paulo",
      id: 2
    }
  ] as iReports[] | null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(!isModalOpen)
  }
  
  const closeModal = (): void => {
    setIsModalOpen(!isModalOpen)
  }

  const getReports = async (): Promise<void> => {
    const token = localStorage.getItem('@accessToken');

    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await instance.get<iReports[]>('/reports');
      setReports(data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitReport = async (data: iReportsRegister): Promise<void> => {
    try {
      const submit = await instance.post<iReportsResponse>('/reports', data);
      console.log(submit);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReport = async (id: number): Promise<void> => {
    try {
      const delReport = await instance.delete<void>(`/reports/${id}`);
      console.log(delReport)
    } catch (error) {
      console.error(error);
    }
  }

  const editReport = async (id: number, data: iEditReport): Promise<void> => {
    try {
      const edit = await instance.patch<iEditResponse>(`/reports/${id}`, data)
      console.log(edit)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ReportsContext.Provider
      value={{ getReports, submitReport, openModal, closeModal, reports, deleteReport, editReport }}>
      {children}
    </ReportsContext.Provider>
  );
};
