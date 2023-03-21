import { Box, Button, Center, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { AppContext } from '../components/AppContext';
import { Card } from '../components/Card';
import DButton from '../components/DButton';
import { login } from '../services/login';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  isLoggedIn && navigate('/account/1');

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert('Invalid e-mail or password');
    }

    const data: any = await api;
    setIsLoggedIn(true);
    changeLocalStorage({ login: true, user: { id: data.id, name: data.name, email: data.email } });
    navigate('/account/1');
  };

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <h1>DIO Account</h1>
        </Center>
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputGroup size="md">
          <Input
            type={show ? 'text' : 'password'}
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center>
          <DButton onClick={() => validateUser(email, password)} />
        </Center>
      </Card>
    </Box>
  );
};

export default Home;
