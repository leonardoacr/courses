interface IDIoBank {
  login: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const dioBank = {
  login: false,
  user: {
    id: '',
    name: '',
    email: '',
  },
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('diobank');
};

export const createLocalStorage = (): void => {
  localStorage.setItem('diobank', JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: IDIoBank): void => {
  localStorage.setItem('diobank', JSON.stringify(dioBank));
};
