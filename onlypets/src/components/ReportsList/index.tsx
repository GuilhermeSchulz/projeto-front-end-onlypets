// import { useContext } from 'react'
// import { ReportsContext } from '../../contexts/ReportsContext'
import { iReports } from '../../contexts/ReportsContext';
import { ReportsItem } from './ReportsItem';
import { StyledReportsList } from './styles';

export const ReportsList = () => {
  // const { reports } = useContext(ReportsContext)
  const reports = [
    {
      userId: '1',
      title: 'animais passando fome',
      description:
        'o dono saiu de viagem e deixou os animais passando fome na casa sozinhos',
      adress: 'Rua dos Anjos, 290',
      city: 'São Paulo',
      id: 1,
    },
    {
      userId: '2',
      title: 'Minha vizinha prendeu o cachorro em casa',
      description:
        'Já fazem cinco dias que o cachorro não para de chorar. Está preso e pegando chuva',
      adress: 'Terceira Rua, 250',
      city: 'Belém',
      id: 2,
    },
  ];
  return (
    <StyledReportsList>
      {reports ? (
        reports.map((report: iReports) => (
          <ReportsItem key={report.id} report={report} />
        ))
      ) : (
        <li className='no-reports'>Não existem denúncias</li>
      )}
    </StyledReportsList>
  );
};
