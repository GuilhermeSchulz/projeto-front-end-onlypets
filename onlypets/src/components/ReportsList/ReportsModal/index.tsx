import { useContext } from 'react';
import { iReportsContext, ReportsContext } from '../../../contexts/ReportsContext';
import { Button } from '../../Button/styles';
import { StyledReportsModal } from './styles';

export const ReportsModal = () => {
    const { closeModal } = useContext(ReportsContext as React.Context<iReportsContext>);

    return (
        <StyledReportsModal>
            <div className='modal'>
                <h1 className='form-title'>Denuncie maus-tratos</h1>
                <section>
                    {/* <p className='modal--text'>{report.adress}</p> */}
                    <p className='modal--text'>Rua dos Anjos, 290</p>
                    <p className='modal--text'>Informações:</p>
                    {/* <p className='modal--text'>{report.description}</p> */}
                    <p className='modal--text'>o dono saiu de viagem e deixou os animais passando fome na casa sozinhos</p>
                </section>
                <Button
                  className='button__size--medium button__color--yellow'
                  onClick={closeModal}>
                  Receber Denúncia
                </Button>
            </div>
        </StyledReportsModal>
    );
};
