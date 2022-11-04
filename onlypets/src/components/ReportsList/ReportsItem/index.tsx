import { useContext, useState } from 'react';
import menu from '../../../assets/frame-menu.svg';
import { ReportsContext } from '../../../contexts/ReportsContext';
// import { ReportsModal } from '../ReportsModal';
import { StyledReportItem } from './styles';

export const ReportsItem = ({ report }: any) => {
    const { openModal, deleteReport } = useContext(ReportsContext)
    const [open, setOpen ] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    return (
        <StyledReportItem key={report.id}>
            <p>{report.title}</p>
            <figure onClick={openMenu}>
                <img src={menu} alt='' />
            </figure>
                {open ? (
                    <ul id={report.id}>
                        <li onClick={openModal}>Visualizar</li>
                        <li onClick={() => deleteReport(report.id)}>Excluir</li>
                    </ul>
                ) : null }
        </StyledReportItem>
    );
};
