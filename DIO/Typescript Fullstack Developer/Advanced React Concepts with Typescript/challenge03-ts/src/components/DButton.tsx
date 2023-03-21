import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IDButton {
  onClick: MouseEventHandler;
}

export const DButton = ({ onClick }: IDButton) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="purple"
      variant="outline"
      size="sm"
      borderColor="purple"
      color="purple"
      marginTop="16px"
    >
      Login
    </Button>
  );
};

export default DButton;
