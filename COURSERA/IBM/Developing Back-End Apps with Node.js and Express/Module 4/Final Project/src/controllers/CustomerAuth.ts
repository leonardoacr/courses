import { Request, Response } from "express";
import customers from "./../data/customers"
import jwt from 'jsonwebtoken';

class CustomerAuth {
    constructor() { }

    login(req: Request, res: Response) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                message:
                    "Username and password are required."
            });
        }

        const customer = Object.values(customers).find((c) =>
            c.username === username && c.password === password);

        if (!customer) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        let accessToken = jwt.sign({
            data: customer
        }, 'access', { expiresIn: 60 * 60 });

        req.session.authorization = {
            accessToken
        }

        return res.status(200).json({
            message:
                "Customer successfully logged in", accessToken
        });
    }

    register(req: Request, res: Response) {
        const username = req.body.username;
        const password = req.body.password;

        if (!username || !password) {
            return res.status(400).json({ message: "Invalid input" });
        }

        // Check if the user already exists in the customer list
        const customerArray = Object.values(customers);
        const customer = customerArray.find((customer) => customer.username === username);
        if (customer) {
            return res.status(400).json({ message: "Customer already exists" });
        }

        // Add the new customer to the customer list
        const newCustomerId = Object.keys(customers).length + 1;
        customers[newCustomerId] = { username, password };

        return res.status(201).json({ message: "Customer successfully created" });
    }
}


export default CustomerAuth;