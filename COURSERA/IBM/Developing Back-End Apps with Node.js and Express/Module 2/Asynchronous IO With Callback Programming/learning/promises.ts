const account = {
    email: 'test@gmail.com',
    password: '123456'
};

const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(console.log(account));
    }, 3000)
})

const result = async () => {
    return await api;
}
console.log('API: ' + result())