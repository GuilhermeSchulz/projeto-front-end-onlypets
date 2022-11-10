import { MdOutlineDownloading } from 'react-icons/md';
import { Container } from './styles';
import '../../styles/text.css';

const Loading = () => (
  <Container>
    <MdOutlineDownloading size={25} />
    <p className='form__title'>carregando ...</p>
  </Container>
);

export default Loading;
