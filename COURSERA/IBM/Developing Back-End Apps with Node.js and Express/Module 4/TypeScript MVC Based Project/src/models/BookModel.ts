import { IReview, IBook } from "../interfaces/IBooks";
import books from "./../data/books"

export class BookModel {
    constructor() {
    }

    getAllBooks(): IBook {
        return books;
    }

    getBookByISBN(isbn: string): IBook | undefined {
        const bookArray = Object.values(books);
        const book = bookArray.find((book) => book.isbn === isbn);
        console.log(isbn)
        return book;
    }

    getBookByAuthor(author: string): IBook | undefined {
        const bookArray = Object.values(books);
        const book = bookArray.find((book) => book.author === author);
        return book;
    }

    getBookByTitle(title: string): IBook | undefined {
        const bookArray = Object.values(books);
        const book = bookArray.find((book) => book.title === title);
        return book;
    }

    getBookReview(isbn: string): IBook | undefined {
        const bookArray = Object.values(books);
        const book = bookArray.find((book) => book.isbn === isbn);
        const review = book.reviews;
        return review;
    }

    createReview(isbn: string, username: string, rating: number, comment: string) {
        const book = Object.values(books).find((book) => book.isbn === isbn);
        if (!book) {
            throw new Error(`Book with ISBN ${isbn} not found.`);
        }

        if (this.checkUsernameOnReview(username)) {
            throw new Error(`This username already have a review on this book.`);
        }

        const reviewId = Object.keys(book.reviews).length + 1;
        const review = { username, rating, comment };
        book.reviews[reviewId] = review;

        // Update the book in the books object
        books[book.id] = book;
    }

    updateReview(isbn: string, username: string, rating: number, comment: string) {
        const book = Object.values(books).find((book) => book.isbn === isbn);
        if (!book) {
            throw new Error(`Book with ISBN ${isbn} not found.`);
        }

        const review = Object.values(book.reviews).find((review) =>
            (review as IReview[keyof IReview]).username === username
        );

        if (review) {
            (review as IReview[keyof IReview]).rating = rating;
            (review as IReview[keyof IReview]).comment = comment;

            // Update the book in the books object
            books[book.id] = book;
        } else {
            throw new Error(`This username does not have a review on this book.`);
        }
    }

    deleteReview(isbn: string, username: string) {
        const book = Object.values(books).find((book) => book.isbn === isbn);
        if (!book) {
            throw new Error(`Book with ISBN ${isbn} not found.`);
        }

        if (!this.checkUsernameOnReview(username)) {
            throw new Error(`This username does not have a review on this book.`);
        }

        const reviewId = Object.keys(book.reviews).find((id) =>
            (book.reviews as IReview)[parseInt(id)].username === username
        );

        delete book.reviews[reviewId!];
        books[book.id] = book;
    }


    private checkUsernameOnReview(username: string): boolean {
        try {
            return Object.values(books).some((book) => {
                return Object.values(book.reviews as IReview).some((review) =>
                    review.username === username
                );
            });
        } catch (error) {
            return false;
        }
    }

}

