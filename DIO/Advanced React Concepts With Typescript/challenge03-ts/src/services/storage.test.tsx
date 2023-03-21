import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './storage';

const dioBank = {
  login: false,
};

describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  it('Must return object in localStorage with key diobank', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith('diobank');
  });

  it('Must create object in localStorage', () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));
  });

  it('Must change value of object in localStorage', () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));
  });
});
