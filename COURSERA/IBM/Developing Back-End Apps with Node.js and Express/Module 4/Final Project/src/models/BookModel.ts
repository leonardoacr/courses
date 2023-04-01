import { IReview, IBook } from "../interfaces/IBooks";
import books from "./../data/books"

export class Book {
    isbn: string;
    reviews: { [reviewId: number]: IReview } = {};

    constructor(isbn: string) {
        this.isbn = isbn;
    }

    createReview(username: string, rating: number, comment: string) {
        const reviewId = Object.keys(this.reviews).length + 1;
        const review = { username, rating, comment };
        this.reviews[reviewId] = review;
    }

    updateReview(reviewId: number, username: string, rating: number, comment: string) {
        const review = this.reviews[reviewId];
        if (review) {
            review[reviewId].username = username;
            review[reviewId].rating = rating;
            review[reviewId].comment = comment;
        } else {
            throw new Error(`Review with ID ${reviewId} does not exist`);
        }
    }

    deleteReview(reviewId: number) {
        if (this.reviews[reviewId]) {
            delete this.reviews[reviewId];
        } else {
            throw new Error(`Review with ID ${reviewId} does not exist`);
        }
    }
}

export const getAllBooks = () => {
    return Object.values(books);
};

export const getBookByISBN = (isbn: number): IBook | undefined => {
    return books[isbn];
};

export const getBookByAuthor = (author: string): IBook | undefined => {
    const bookArray = Object.values(books);
    const book = bookArray.find((book) => book.author === author);
    return book;
}

export const getBookByTitle = (title: string): IBook | undefined => {
    const bookArray = Object.values(books);
    const book = bookArray.find((book) => book.title === title);
    return book;
}
