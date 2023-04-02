import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'access', (err: any, user: any) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                return res.status(403).json({ message: 'User not authenticated' });
            }
        });
    } else {
        return res.status(403).json({ message: 'User not logged in' });
    }
}
