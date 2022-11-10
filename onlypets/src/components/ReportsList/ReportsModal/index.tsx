import { useContext } from 'react';
import {
  iReportsContext,
  ReportsContext,
} from '../../../contexts/ReportsContext';
import { Button } from '../../Button/styles';
import { StyledReportsModal } from './styles';
import { SlClose } from 'react-icons/sl';

export const ReportsModal = () => {
  const { closeModal, dataModal } = useContext(
    ReportsContext as React.Context<iReportsContext>
  );

  const close = () => {
    closeModal();
  };

  return (
    <StyledReportsModal>
      <div className='modal'>
        <h1 className='form-title'>Denuncie maus-tratos</h1>
        <SlClose onClick={close} className='icon' />
        <section>
          <p className='modal--text dark--text'>Denúncia:</p>
          <p className='modal--text'>{dataModal?.title}</p>
          <p className='modal--text dark--text'>Endereço:</p>
          <p className='modal--text'>{dataModal?.adress}</p>
          <p className='modal--text dark--text'>Informações:</p>
          <p className='modal--text'>{dataModal?.description}</p>
        </section>
        <Button
          className='button__size--medium button__color--yellow'
          onClick={closeModal}
        >
          Receber Denúncia
        </Button>
      </div>
    </StyledReportsModal>
  );
};
