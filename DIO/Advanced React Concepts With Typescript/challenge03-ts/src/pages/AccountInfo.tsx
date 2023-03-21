import { Box, Center, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../components/AppContext';

const AccountInfo = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <Center minHeight="84.2vh">
        <Box width="30%" padding="25px">
          <Box backgroundColor="#FFFFFF" color="black" borderRadius="25px" padding="15px">
            <Text fontSize="3xl" fontWeight="bold">
              Account Info
            </Text>
            <Text fontSize="xl">ID: {user.id}</Text>
            <Text fontSize="xl">Name: {user.name}</Text>
            <Text fontSize="xl">Email: {user.email}</Text>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default AccountInfo;
