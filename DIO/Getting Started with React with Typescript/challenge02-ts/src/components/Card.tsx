import { Center, Input, Box, Button } from '@chakra-ui/react';
import { login } from '../services/login';
import { CustomButton } from './CustomButton';

export const Card = () => {
  return (
    <Center minHeight="84.2vh">
      <Box width="30%" padding="25px">
        <Box backgroundColor="#FFFFFF" color="black" borderRadius="25px" padding="15px">
          <Center>
            <h1>DIO Bank</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <CustomButton text="Login" event={login} />
          </Center>
        </Box>
      </Box>
    </Center>
  );
};
