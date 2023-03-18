import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it('Should show an alert with welcome', () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith('Welcome!');
  });
});
