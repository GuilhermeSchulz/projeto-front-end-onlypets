import './App.css';
import { GlobalStyles } from './styles';
import { UserProvider } from './contexts/user';
import { PetProvider } from './contexts/PetContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import { ReportsProvider } from './contexts/ReportsContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <PetProvider>
          <ReportsProvider>
            <RoutesMain />
          </ReportsProvider>
        </PetProvider>
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
