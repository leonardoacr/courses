import express from 'express';
import CustomerController from '../controllers/CustomerController';

const router = express.Router();

const customerController = new CustomerController();

router.post('/review/:isbn', customerController.createReview);
router.put('/review/:isbn', customerController.updateReview);
router.delete('/review/:isbn', customerController.deleteReview);

export default router;