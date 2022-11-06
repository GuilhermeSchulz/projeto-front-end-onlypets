import './App.css';
import { Homepage } from './pages/homepage';
import { GlobalStyles } from './styles';
import { UserProvider } from './contexts/user';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Homepage />
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
