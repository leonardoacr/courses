import express, { Request, Response } from 'express';
import session from 'express-session';
import userRoutes from './routes/UserRoutes';
import authRoutes from './routes/AuthRoutes'
import authMiddleware from './middleware/authMiddleware';

const app = express();

app.use(session({ secret: "fingerpint", resave: true, saveUninitialized: true }))

app.use(express.json());

app.use("/user", authMiddleware, userRoutes);
app.use("/", authRoutes)

export default app;
