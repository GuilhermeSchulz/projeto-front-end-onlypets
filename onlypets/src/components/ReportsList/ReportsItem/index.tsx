import { useContext, useEffect, useRef, useState } from 'react';
import menu from '../../../assets/frame-menu.svg';
import { ReportsContext } from '../../../contexts/ReportsContext';
// import { ReportsModal } from '../ReportsModal';
import { StyledReportItem } from './styles';

export const ReportsItem = ({ report }: any) => {
  const { openModal, deleteReport } = useContext(ReportsContext);
  const [open, setOpen] = useState(false);

  const contentRef: React.MutableRefObject<any> = useRef();

  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleOutclick = (evt: any) => {
      const target = evt.target;
      !contentRef.current.contains(target) && setOpen(false);
    };

    document.addEventListener('mousedown', handleOutclick);

    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  }, []);

  return (
    <StyledReportItem key={report.id}>
      <p>{report.title}</p>
      <figure onClick={openMenu}>
        <img src={menu} alt='' />
      </figure>
      {open ? (
        <ul id={report.id} ref={contentRef}>
          <li onClick={openModal}>Visualizar</li>
          <li onClick={() => deleteReport(report.id)}>Excluir</li>
        </ul>
      ) : null}
    </StyledReportItem>
  );
};
