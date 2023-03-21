import { login } from './login';

describe('login', () => {
  const mockEmail = 'nath@dio.bank';
  const mockPassword = '123456';
  it('Should display a welcome alert if the email is valid', async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it('Should display an error if the email or password is invalid', async () => {
    const response = await login('email@invalid.com', 'invalid-password');
    expect(response).toBeFalsy();
  });
});
