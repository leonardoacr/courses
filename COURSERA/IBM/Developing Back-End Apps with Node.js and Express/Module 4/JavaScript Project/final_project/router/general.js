const express = require('express');
const axios = require("axios");
let books = require("./booksdb.js");
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message:
        "Username and password are required."
    });
  }

  const user = users.find((user) => user.username === username);
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUserId = Object.keys(users).length;
  users[newUserId] = { username, password };
  return res.status(201).json({ message: "User successfully created" });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  //Write your code here
  return res.status(200).json({ books });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const { isbn } = req.params;
  if (!isbn) {
    return res.status(400).json({ message: "Bad request" });
  }

  const book = books[isbn];
  if (book) {
    return res.status(200).json({ book });
  } else {
    return res.status(404).json({ message: `ISBN ${isbn} not found` });
  }
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const { author } = req.params;
  if (!author) {
    return res.status(400).json({ message: "Bad request" });
  }

  const filteredBooks = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );
  if (filteredBooks.length > 0) {
    return res.status(200).json({ books: filteredBooks });
  } else {
    return res.status(404).json({ message: `Books by ${author} not found` });
  }
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const { title } = req.params;
  if (!title) {
    return res.status(400).json({ message: "Bad request" });
  }

  const filteredBooks = Object.values(books).filter(
    (book) => book.title.toLowerCase().includes(title.toLowerCase())
  );
  if (filteredBooks.length > 0) {
    return res.status(200).json({ books: filteredBooks });
  } else {
    return res.status(404).json({ message: `Books with title ${title} not found` });
  }
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  const { isbn } = req.params;
  if (!isbn) {
    return res.status(400).json({ message: "Bad request" });
  }

  const book = books[isbn];
  if (book && book.reviews) {
    return res.status(200).json({ reviews: book.reviews });
  } else {
    return res.status(404).json({ message: `Reviews for ISBN ${isbn} not found` });
  }
});

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

module.exports.general = public_users;
