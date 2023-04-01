import { Request, Response } from "express";
import { Book } from "../models/BookModel";

class BookController {
    constructor() {
        this.createReview = this.createReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }

    createReview(req: Request, res: Response) {
        const { isbn } = req.params;
        const { username, rating, comment } = req.body;
        const book = new Book(isbn);
        book.createReview(username, rating, comment);
        res.status(201).json({ message: "Review created successfully", book });
    }

    updateReview(req: Request, res: Response) {
        const { isbn } = req.params;
        const { reviewId, username, rating, comment } = req.body;
        const book = new Book(isbn);
        book.updateReview(reviewId, username, rating, comment);
        res.status(200).json({ message: "Review updated successfully", book });
    }

    deleteReview(req: Request, res: Response) {
        const { isbn } = req.params;
        const { reviewId } = req.body;
        const book = new Book(isbn);
        book.deleteReview(reviewId);
        res.status(200).json({ message: "Review deleted successfully", book });
    }
}

export default BookController;
