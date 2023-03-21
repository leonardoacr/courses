import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Account Info
      </Text>
      <Link to="/account/1">
        <Text fontSize="xl">Account</Text>
      </Link>
      <a href="/account/1">Link com tag a</a>
    </>
  );
};

export default AccountInfo;
