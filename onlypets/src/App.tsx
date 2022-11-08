import './App.css';
import { GlobalStyles } from './styles';
import { UserProvider } from './contexts/user';
import { PetProvider } from './contexts/PetContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <PetProvider>
          <RoutesMain />
        </PetProvider>
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
