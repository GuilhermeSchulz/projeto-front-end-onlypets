import { useContext, useEffect, useRef, useState } from 'react';
import { ReportsContext } from '../../../contexts/ReportsContext';
import { StyledReportItem } from './styles';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

export const ReportsItem = ({ report }: any) => {
  const { openModal, deleteReport, setDataModal } = useContext(ReportsContext);
  const [open, setOpen] = useState<React.SetStateAction<boolean>>(false);

  const contentRef: React.MutableRefObject<any> = useRef();

  const openMenu = () => {
    setOpen(!open);
  };

  const handleView = () => {
    openModal();
    setDataModal(report)
    setOpen(false);
  };

  useEffect(() => {
    const handleOutclick = (evt: any) => {
      const target = evt.target;
      !contentRef.current?.contains(target) && setOpen(false);
    };

    document.addEventListener('mousedown', handleOutclick);

    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  }, []);

  return (
    <StyledReportItem key={report.id}>
      <p>{report.title}</p>
      <HiOutlineDotsCircleHorizontal
        onClick={openMenu}
        size={25}
        className='circle__option'
      />
      {open ? (
        <ul id={report.id.toString()} ref={contentRef} className='option__ul'>
          <li onClick={() => handleView()}>Visualizar</li>
          <li onClick={() => deleteReport(report.id)}>Excluir</li>
        </ul>
      ) : null}
    </StyledReportItem>
  );
};
