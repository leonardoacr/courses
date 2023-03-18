import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <div style={{ backgroundColor: '#111f2a', minHeight: '100vh' }}>
        <Layout>
          <Card />
        </Layout>
      </div>
    </ChakraProvider>
  );
}

export default App;
