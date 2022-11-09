import { useContext } from 'react';
import { ReportsContext } from '../../contexts/ReportsContext';
import { iReports } from '../../contexts/ReportsContext';
import { ReportsItem } from './ReportsItem';
import { StyledReportsList } from './styles';

export const ReportsList = () => {
  const { reports } = useContext(ReportsContext);

  return (
    <StyledReportsList>
      {reports ? (
        reports.map((report: iReports, index) => (
          <ReportsItem key={index} report={report} />
        ))
      ) : (
        <li className='no-reports'>Não existem denúncias</li>
      )}
    </StyledReportsList>
  );
};
