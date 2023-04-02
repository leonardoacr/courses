import { Request, Response } from "express";
import books from "../data/books";
import { BookModel } from "../models/BookModel";

class BookController {
    constructor() {
        this.createReview = this.createReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }

    async createReview(req: Request, res: Response): Promise<void> {
        try {
            const { isbn } = req.params;
            const { username, rating, comment } = req.body;
            const bookModel = new BookModel();
            await bookModel.createReview(isbn, username, rating, comment);
            res.status(201).json({ message: "Review created successfully", books });
        } catch (error: unknown) {
            res.status(404).json({ message: (error as Error).message });
        }
    }

    async updateReview(req: Request, res: Response): Promise<void> {
        try {
            const { isbn } = req.params;
            const { username, rating, comment } = req.body;
            const bookModel = new BookModel();
            await bookModel.updateReview(isbn, username, rating, comment);
            res.status(201).json({ message: "Review updated successfully", books });
        } catch (error: unknown) {
            res.status(404).json({ message: (error as Error).message });
        }
    }

    deleteReview(req: Request, res: Response) {
        try {
            const { isbn } = req.params;
            const { username } = req.body;
            const book = new BookModel();
            book.deleteReview(isbn, username);
            res.status(200).json({ message: "Review deleted successfully", book });
        } catch (error) {
            res.status(404).json({ message: (error as Error).message });
        }
    }
}

export default BookController;
