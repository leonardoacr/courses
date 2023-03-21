const account = {
    email: 'nath@dio.bank',
    password: '123456',
    name: 'Nathaly Souza',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account)
    }, 3000)
})