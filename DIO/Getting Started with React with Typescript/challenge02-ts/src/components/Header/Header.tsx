import { useContext } from 'react';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import BankIcon from './../../assets/bankImg.svg';
import './Header.css';

export const Header = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="inherit"
      textColor="white"
      flexDir="column"
    >
      <img width="50rem" src={BankIcon} alt="bank-icon" />
      <p>DIO Bank</p>
    </Flex>
  );
};
