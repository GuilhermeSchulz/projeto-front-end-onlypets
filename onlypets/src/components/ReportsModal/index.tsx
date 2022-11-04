import { useContext } from 'react';
import { iReportsContext, ReportsContext } from '../../contexts/ReportsContext';
import { Button } from '../Button/styles';
import { StyledReportsModal } from './styles';

export const ReportsModal = () => {
  const { closeModal } = useContext(ReportsContext as React.Context<iReportsContext>);

  return (
    <StyledReportsModal>
      <h1 className='form-title'>Denuncie maus-tratos</h1>
      <section>
        <p>Rua do Beco, 1313, Canoas/RS</p>
        <p>Informações:</p>
        <p>
          Animal preso a 12984712 dias precisando de ajuda, com pouca comida e
          sem acesso a agua, também apanhou
        </p>
      </section>
      <Button
        className='button__size--medium button__color--yellow'
        onClick={closeModal}
      >
        Receber Denúncia
      </Button>
    </StyledReportsModal>
  );
};