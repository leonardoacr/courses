import { login } from './login';

describe('login', () => {
  const mockEmail = 'nath@dio.bank';
  it('Should display a welcome alert if the email is valid', async () => {
    const response = await login(mockEmail);
    expect(response).toBeTruthy();
  });

  it('Should display an error if the email is invalid', async () => {
    const response = await login('email@invalid.com');
    expect(response).toBeFalsy();
  });
});
