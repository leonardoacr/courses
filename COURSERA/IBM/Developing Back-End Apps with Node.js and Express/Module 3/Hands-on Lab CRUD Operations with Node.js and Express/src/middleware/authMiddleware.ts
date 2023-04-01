import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Middleware which tells that the user is authenticated or not
    if (req.session.authorization) {
        let token = req.session.authorization['accessToken']; // Access Token

        jwt.verify(token, "access", (err: any, user: any) => {
            if (!err) {
                req.user = user;
                next();
            }
            else {
                return res.status(403).json({ message: "User not authenticated" })
            }
        });
    } else {
        return res.status(403).json({ message: "User not logged in" })
    }
};
