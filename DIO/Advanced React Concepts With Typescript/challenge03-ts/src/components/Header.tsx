import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';
import { AppContext } from './AppContext';
import BankIcon from './../assets/bankImg.svg';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({
      login: false,
      user: {
        id: '',
        name: '',
        email: '',
      },
    });
    setIsLoggedIn(false);
    navigate('/');
  };

  console.log('page now: ' + location.pathname);
  let buttonText;

  const buttonOnClick = () => {
    if (location.pathname === '/account/1') {
      navigate('/accountinfo');
      return;
    }

    if (location.pathname === '/accountinfo') {
      navigate('/account/1');
      return;
    }
  };

  if (location.pathname === '/account/1') {
    buttonText = 'Account Info';
  } else if (location.pathname === '/accountinfo') {
    buttonText = 'Account';
  }

  return (
    <Flex justifyContent="center" backgroundColor="inherit" textColor="white">
      <Box>
        <Center>
          <img width="40rem" src={BankIcon} alt="bank-icon" />
          <Text fontSize="1xl">DIO Bank</Text>
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button
            colorScheme="blue"
            size="sm"
            marginTop={3}
            marginRight={3}
            onClick={() => buttonOnClick()}
          >
            {buttonText}
          </Button>
          <Button
            colorScheme="purple"
            size="sm"
            marginTop={3}
            marginRight={3}
            onClick={() => logout()}
          >
            Exit
          </Button>
        </>
      )}
    </Flex>
  );
};
