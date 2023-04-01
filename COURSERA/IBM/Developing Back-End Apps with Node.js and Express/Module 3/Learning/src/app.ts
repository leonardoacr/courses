import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const secretKey = "secret-key";

app.get('/', (req: Request, res: Response) => {
    res.send('hello')
})

app.post("/login", (req: Request, res: Response) => {
    // Replace this with your own authentication logic
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        // If authentication is successful, generate a JWT token
        const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
        console.log('generated token: ' + token);
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.get("/protected", (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        console.log('received token: ' + authHeader);
        const token = authHeader.split(" ")[1];
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            } else {
                // Token is valid, proceed to the protected route
                res.json({ message: "Protected route" });
            }
        });
    } else {
        // Authorization header not found
        res.status(401).json({ message: "Unauthorized" });
    }
});

export default app;