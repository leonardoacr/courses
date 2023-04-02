import { Request, Response } from "express";
import customers from "../data/customers"
import jwt from 'jsonwebtoken';

class UserAuth {
    constructor() { }

    login(req: Request, res: Response) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                message:
                    "Username and password are required."
            });
        }

        const user = Object.values(customers).find((c) =>
            c.username === username && c.password === password);

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        let accessToken = jwt.sign({
            data: user
        }, 'access', { expiresIn: '7d' });

        req.session.authorization = {
            accessToken
        }

        return res.status(200).json({
            message:
                "user successfully logged in", accessToken
        });
    }

    register(req: Request, res: Response) {
        const username = req.body.username;
        const password = req.body.password;

        if (!username || !password) {
            return res.status(400).json({ message: "Invalid input" });
        }

        // Check if the user already exists in the user list
        const customerArray = Object.values(customers);
        const user = customerArray.find((user) => user.username === username);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Add the new user to the user list
        const newCustomerId = Object.keys(customers).length + 1;
        customers[newCustomerId] = { username, password };

        return res.status(201).json({ message: "User successfully created" });
    }
}


export default UserAuth;