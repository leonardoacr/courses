import express from 'express';
import UserAuth from '../controllers/UserAuth';

const router = express.Router();

const userAuth = new UserAuth();

router.post('/login', userAuth.login);

export default router;