import axios from "axios"

// Task 10: Get all books – Using async callback function – 2 Points
const urlBase = 'http://localhost:3000';

async function getAllBooks() {
    try {
        const response = await axios.get(urlBase);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getAllBooks();

// Task 11: Search by ISBN – Using Promises – 2 Points
const getByISBN = (isbn) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlBase}/isbn/${isbn}`)
            .then(response => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
    });
}

getByISBN('1');

// Task 12: Search by Author – 2 Points
const getByAuthor = (author) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlBase}/author/${author}`)
            .then(response => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
    });
}

getByAuthor('Chinua Achebe');

// Task 13: Search by Title - 2 Points
const getByTitle = (title) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlBase}/title/${title}`)
            .then(response => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
    });
}

getByTitle('Things Fall Apart');

