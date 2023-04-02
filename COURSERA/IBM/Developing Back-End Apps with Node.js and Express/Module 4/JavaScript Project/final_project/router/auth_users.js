const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [{
  "username": "johnny",
  "password": "123456"
}];

const isValid = (username) => {
  //write code to check is the username is valid
  const user = users.find((user) => user.username === username);
  return Boolean(user);
}

const authenticatedUser = (username, password) => {
  // Find the first user in the array with the given username and password
  const user = users.find((user) => user.username === username && user.password === password);

  // Return true if a user is found, false otherwise
  return Boolean(user);
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  //Write your code here
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message:
        "Username and password are required."
    });
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign({
      data: password
    }, 'access', { expiresIn: '7d' });

    req.session.authorization = {
      accessToken, username
    }
    return res.status(200).send("User successfully logged in.");
  } else {
    return res.status(401).json({ message: "Invalid credentials." });
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  const { isbn } = req.params;
  const { review } = req.body;
  const { username } = req.session.authorization;

  if (!isbn || !review || !username) {
    return res.status(400).json({ message: "Bad request" });
  }

  if (Object.keys(books).includes(isbn)) {
    const book = books[isbn];
    if (!book.reviews) {
      book.reviews = {};
    }
    book.reviews[username] = review;
    return res.status(200).json({ message: "Review successfully posted." });
  } else {
    return res.status(404).json({ message: `ISBN ${isbn} not found.` });
  }
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.authorization.username;

  if (!isbn || !username) {
    return res.status(400).json({ message: "Bad request" });
  }

  if (Object.keys(books).includes(isbn)) {
    const book = books[isbn];
    if (book.reviews && book.reviews[username]) {
      delete book.reviews[username];
      return res.status(200).json({ message: "Review successfully deleted" });
    } else {
      return res.status(404).json({ message: `Review not found for ISBN ${isbn}` });
    }
  } else {
    return res.status(404).json({ message: `ISBN ${isbn} not found` });
  }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
