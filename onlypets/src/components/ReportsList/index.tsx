import { useContext } from 'react'
import menu from '../../assets/frame-menu.svg'
import { ReportsContext } from '../../contexts/ReportsContext'
import { StyledReportsList } from './styles'

export const ReportsList = () => {
    const { reports } = useContext(ReportsContext)

    return (
        <StyledReportsList>
            {reports ? (
                reports.map(elem => (
                    <li key={elem.id}>
                        <p>Maus tratos</p>
                        <img src={menu} alt='' />
                    </li>
                ))
            ) : (
                <li className='no-reports'>Não existem denúncias</li>
            )}
        </StyledReportsList>
    )
} 