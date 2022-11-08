import './App.css';
//import { Homepage } from './pages/homepage';
import { GlobalStyles } from './styles';
import { UserProvider } from './contexts/user';
import { PetProvider } from './contexts/PetContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PetPage } from './pages/petPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <PetProvider>
          <PetPage />
        </PetProvider>
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
