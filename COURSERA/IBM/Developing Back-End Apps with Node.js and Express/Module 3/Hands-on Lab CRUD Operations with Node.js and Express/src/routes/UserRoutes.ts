import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

const userController = new UserController();

router.get('/', userController.getUsers);
router.get('/:email', userController.getUser);
router.post('/', userController.createUser);
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

export default router;