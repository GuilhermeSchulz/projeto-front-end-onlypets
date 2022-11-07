import './App.css';
import { Homepage } from './pages/homepage';
import { GlobalStyles } from './styles';
import { UserProvider } from './contexts/user';
import { PetProvider } from './contexts/PetContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from './pages/dashboard';
import { ReportsProvider } from './contexts/ReportsContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <PetProvider>
          <ReportsProvider>
            {/* <Homepage /> */}
            <Dashboard />
          </ReportsProvider>
        </PetProvider>
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
