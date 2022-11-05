import { StyledFooter } from './styles';
import imgFooter1 from '../../assets/img-card-footer-1.svg';
import imgFooter2 from '../../assets/img-card-footer-2.svg';
import imgFooter3 from '../../assets/img-card-footer-3.svg';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <h2>Porque adotar?</h2>
        <div className='container__box-footer'>
          <img src={imgFooter1} alt='' />
          <img src={imgFooter2} alt='' />
          <img src={imgFooter3} alt='' />
        </div>
      </div>
    </StyledFooter>
  );
};
