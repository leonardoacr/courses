import { Request, Response } from "express";
import { BookModel } from "../models/BookModel";

class PublicController {
    constructor() {
        this.getAllBooks = this.getAllBooks.bind(this);
    }

    async getAllBooks(req: Request, res: Response) {
        const bookModel = new BookModel();
        const books = await bookModel.getAllBooks();
        res.status(200).json({ books });
    }

    async getBookByISBN(req: Request, res: Response) {
        const { isbn } = req.params
        const bookModel = new BookModel();
        const book = await bookModel.getBookByISBN(isbn);
        res.status(200).json({ book });
    }

    async getBookByAuthor(req: Request, res: Response) {
        const { author } = req.params
        const bookModel = new BookModel();
        const book = await bookModel.getBookByAuthor(author);
        res.status(200).json({ book });
    }

    async getBookByTitle(req: Request, res: Response) {
        const { title } = req.params
        const bookModel = new BookModel();
        const book = await bookModel.getBookByTitle(title);
        res.status(200).json({ book });
    }

    async getBookReview(req: Request, res: Response) {
        const { isbn } = req.params
        const bookModel = new BookModel();
        const review = await bookModel.getBookReview(isbn);
        res.status(200).json({ review });
    }

}

export default PublicController;