import { Center, Input, Box, Button } from '@chakra-ui/react';

export const Card = ({ children }: any) => {
  return (
    <Center minHeight="84.2vh">
      <Box width="30%" padding="25px">
        <Box backgroundColor="#FFFFFF" color="black" borderRadius="25px" padding="15px">
          {children}
        </Box>
      </Box>
    </Center>
  );
};
