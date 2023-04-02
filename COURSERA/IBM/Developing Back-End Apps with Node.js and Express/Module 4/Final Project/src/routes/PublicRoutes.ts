import express from 'express';
import PublicController from '../controllers/PublicController'

const router = express.Router();

const publicController = new PublicController();

router.get("/", publicController.getAllBooks);
router.get('/isbn/:isbn', publicController.getBookByISBN);
router.get('/author/:author', publicController.getBookByAuthor);
router.get('/title/:title', publicController.getBookByTitle);
router.get('/review/:isbn', publicController.getBookReview);

export default router;



