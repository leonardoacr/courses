import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {
  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <div style={{ backgroundColor: '#111f2a', minHeight: '100vh' }}>
            <Layout>
              <MainRoutes />
            </Layout>
          </div>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
