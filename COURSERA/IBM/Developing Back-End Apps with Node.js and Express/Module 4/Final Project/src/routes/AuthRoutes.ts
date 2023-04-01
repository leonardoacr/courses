import express from 'express';
import CustomerAuth from '../controllers/CustomerAuth';

const router = express.Router();

const customerAuth = new CustomerAuth();

router.post('/login', customerAuth.login);
router.post('/register', customerAuth.register);

export default router;