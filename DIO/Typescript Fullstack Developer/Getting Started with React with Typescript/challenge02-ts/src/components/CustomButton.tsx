import { Button } from '@chakra-ui/react';

interface IButton {
  text: string;
  event: () => void;
}

export const CustomButton = ({ text, event }: IButton) => {
  return (
    <Button
      onClick={event}
      colorScheme="purple"
      variant="outline"
      size="sm"
      borderColor="purple"
      color="purple"
      marginTop="16px"
    >
      {text}
    </Button>
  );
};
