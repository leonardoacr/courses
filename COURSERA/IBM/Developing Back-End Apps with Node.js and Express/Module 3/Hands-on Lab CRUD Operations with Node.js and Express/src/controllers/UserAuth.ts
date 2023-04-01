import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

class UserAuth {
    constructor() { }

    login(req: Request, res: Response) {
        const user = req.body.user;
        if (!user) {
            return res.status(404).json({ message: "Body Empty" });
        }
        let accessToken = jwt.sign({
            data: user
        }, 'access', { expiresIn: 60 * 60 });

        req.session.authorization = {
            accessToken
        }
        return res.status(200).send("User successfully logged in");
    }
}

export default UserAuth;