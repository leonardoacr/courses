import { createContext, useEffect, useState } from 'react';
import { IUserData } from '../interfaces/IUserData';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext {
  user: IUserData;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUserData | any>();

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login, user } = JSON.parse(storage);
      setIsLoggedIn(login);
      setUser(user);
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
